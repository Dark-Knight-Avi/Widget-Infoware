import fetch from 'isomorphic-fetch';

const API_KEY = '8dbc5f762dba08256f07a201418ec4e7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export default async (req, res) => {
    const { city } = req.query;

    try {
        const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};
