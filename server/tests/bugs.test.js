const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../src/app'); // note: path relative to tests when run via npm test
const Bug = require('../src/models/Bug');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

describe('Bug API', () => {
  it('creates a bug', async () => {
    const res = await request(app).post('/api/bugs').send({
      title: 'UI Bug',
      description: 'Login button misaligned',
    });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('UI Bug');
    expect(res.body).toHaveProperty('_id');
  });

  it('validates input', async () => {
    const res = await request(app).post('/api/bugs').send({
      title: '',
      description: '',
    });
    expect(res.status).toBe(400); // validation throws error with status 400
    expect(res.body.error).toBe('Title and description are required');
  });

  it('gets all bugs', async () => {
    await Bug.create({ title: 'T1', description: 'd1' });
    const res = await request(app).get('/api/bugs');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('updates a bug', async () => {
    const bug = await Bug.create({ title: 'To Update', description: 'd' });
    const res = await request(app).put(`/api/bugs/${bug._id}`).send({ status: 'resolved' });
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('resolved');
  });

  it('deletes a bug', async () => {
    const bug = await Bug.create({ title: 'To Delete', description: 'd' });
    const res = await request(app).delete(`/api/bugs/${bug._id}`);
    expect(res.status).toBe(200);
    const found = await Bug.findById(bug._id);
    expect(found).toBeNull();
  });
});
