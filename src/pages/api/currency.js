export default async function handler(req, res) {
    const { currency } = req.query;

    try {
        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/df527722c377f6221b275a16/latest/${currency}`
        );

        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching exchange rate data");
    }
}
