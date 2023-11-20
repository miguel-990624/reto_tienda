import { Button, Card, Flex } from "antd";
import { useSearchContext } from "./SearchContext";
const { Meta } = Card;

export const Cards = () => {
    const {mtg} = useSearchContext();
    const dt = mtg

    return (
        <Flex wrap="wrap" gap="1rem" className="mainContent">
            {mtg.map((item) => (
                <Card
                    key={item.url}
                    hoverable
                    size="small"
                    cover={<img alt={item.name} src={item.url} />}
                >
                    <Flex vertical="false"  gap="middle" align="flex-start" className="card">
                        <Meta title={item.name} description={item.description} ellipsis="true" />
                        <Button type="primary">Add to cart</Button>
                    </Flex>
                </Card>
            ))}
        </Flex>
    );
}