const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const fs = require("fs").promises;

const app = require("../../src/app");
const mockFile = require("../mockDatas");

chai.use(chaiHttp);

const { expect } = chai;

describe("Testando a API Cacau Trybe", function () {
  beforeEach(function () {
    sinon.stub(fs, "readFile").resolves(mockFile);
    sinon.stub(fs, "writeFile").resolves();
  });

  afterEach(function () {
    sinon.restore();
  });
  describe("Usando método GET em /chocolates", function () {
    it("Retorna a lista completa de chocolates:", async function () {
      const output = [
        { id: 1, name: "Mint Intense", brandId: 1 },
        { id: 2, name: "White Coconut", brandId: 1 },
        { id: 3, name: "Mon Chéri", brandId: 2 },
        { id: 4, name: "Mounds", brandId: 3 },
      ];
      const response = await chai.request(app).get("/chocolates");
      expect(response.status).to.be.equals(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe("Usando método GET em /chocolates/:id para buscar o ID 4", function () {
    it("Retorna o chocolate Mounds", async function () {
      const response = await chai.request(app).get("/chocolates/4");
      expect(response.status).to.be.equals(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 4,
        name: "Mounds",
        brandId: 3,
      });
    });
  });

  describe("Usando método GET em /chocolates/:id para buscar o ID 99", function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai.request(app).get("/chocolates/99");
      expect(response.status).to.be.equals(404);
      expect(response.body.message).to.be.equals("Chocolate not found");
    });
  });

  describe("Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1", function () {
    it("Retorna os chocolates da marca Lindt & Sprungli", async function () {
      const response = await chai.request(app).get("/chocolates/brand/1");

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        { id: 1, name: "Mint Intense", brandId: 1 },
        { id: 2, name: "White Coconut", brandId: 1 },
      ]);
    });
  });

  describe("Usando o método GET em /chocolates/total", function () {
    it("Retorna a quantidade de chocolates", async function () {
      const response = await chai.request(app).get("/chocolates/total");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: 4 });
    });
  });

  describe("Usando o método GET em /chocolates/search?", function () {
    it("name=Mo retorna uma lista de chocolates que contém Mo no nome", async function () {
      const response = await chai
        .request(app)
        .get("/chocolates/search?name=Mo");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([
        {
          id: 3,
          name: "Mon Chéri",
          brandId: 2,
        },
        {
          id: 4,
          name: "Mounds",
          brandId: 3,
        },
      ]);
    });

    it("name=Diamante Negro retorna o status 404 e um array vazio", async function () {
      const response = await chai
        .request(app)
        .get("/chocolates/search?name=Diamante Negro");

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal([]);
    });
  });

  describe("Usando o método PUT em /chocolates/:id", function () {
    it("Ao passar o id 1 retorna o chocolate correto", async function () {
      const res = await chai.request(app).put("/chocolates/1").send({
        name: "Mint Pretty Good",
        brandId: 2,
      });

      expect(res.status).to.be.equal(200);
      expect(res.body).to.deep.equal({
        chocolate: {
          id: 1,
          name: "Mint Pretty Good",
          brandId: 2,
        },
      });
    });

    it('Retorna status 404 com a mensagem "Chocolate not found" quando passar o id 555', async function () {
      const response = await chai.request(app).put("/chocolates/555").send({
        name: "Mint Pretty Good",
        brandId: 2,
      });
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({
        message: "Chocolate not found",
      });
    });
  });
});
