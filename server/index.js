import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin: [process.env.PUBLIC_URL], methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], credentials: true }));

app.use(express.json());

// Definindo as variáveis de ambiente
process.env.PORT = 3001;
process.env.PUBLIC_URL = 'http://localhost:3000/';

// Rota raiz
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Exemplo de rota protegida que requer autenticação com o token JWT
app.get('/protegido', async (req, res) => {
    try {
        const response = await axios.get('URL_DA_SUA_API_AQUI', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNzEyYTI3NDUtM2Q2ZS00MjUyLTg0OTQtOGI1MTJiZTAxM2JiIiwidGVuYW50X2lkIjoiOGRjY2I4ODY0MjQ4ODBlMTliYjY0MjJlOWY0ZjBhY2JkZDdjMjA0ZWIwMDE3MjI0ZGI1MTc1MjYxNjNmNGQ3MiIsImludGVybmFsX3NlY3JldCI6IjFjZGM1NTE3LTE2NzAtNDVjYy05YTMyLWNjMWY1OTY3MTY5ZCJ9.0sLkQpM5Abh3J-IW95V42IhSiNPZeNzp-tBA49OjwRI',
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao acessar a rota protegida:', error);
        res.status(error.response.status || 500).json({ error: 'Erro ao acessar a rota protegida' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
