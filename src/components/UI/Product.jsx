import { Card, CardContent, Divider, Typography } from "@mui/material"

const Product = ({ name, image, price }) => {

    const newPrice = () => {
        return '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <Card className="max-w-96 content-center">
            <img
                src={image}
                alt="productImage"
                className="mx-auto"
            />
            <Divider className="mt-2 mb-2" />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {newPrice()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Product
