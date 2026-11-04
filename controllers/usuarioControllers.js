const usuarioReqDto = require('../dtos/usuarioReqDto');
const usuarioResDto = require('../dtos/usuarioResDto');
const bcrypt = require('bcrypt');
const { Usuario } = require('../models');

exports.criarUsuario = async (req, res) => {
  try {
    const data = usuarioReqDto.toEntity(req.body);
    const senhaHash = await bcrypt.hash(data.senha, 12);

    const usuario = await Usuario.create({
      ...data,
      senha: senhaHash,
    });

    res.status(201).json(usuarioResDto.FromEntity(usuario));
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};