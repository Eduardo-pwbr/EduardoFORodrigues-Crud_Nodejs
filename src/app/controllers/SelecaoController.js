import db from "../model/db.js";

class SelecaoController {
  async list(req, res) {
    const listPost = await db.listPosts();

    res.send(listPost);
  }
//busca por id de post
  async listId(req, res){
    const listId = await db.listIdPosts(
      req.params.id,
      req.body.title,
      req.body.name,
      req.body.disciplina,
      req.body.description);

    res.send(listId);
  }


  async insert(req, res) {
    const post = await db.createPost(
      req.body.title,
      req.body.name,
      req.body.disciplina,
      req.body.description
    );

    res.send(post);
  }
  async delete(req, res) {
    //req.params.id
    const post = await db.deletePosts(req.params.id);
    res.send(post);
  }

  async update(req, res) {
    const post = await db.atualizaPosts(
      req.params.id,
      req.body.title,
      req.body.name,
      req.body.disciplina,
      req.body.description
    );
    res.send(post);
  }


}

export default new SelecaoController();
