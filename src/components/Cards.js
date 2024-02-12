import { Button, Card, Flex } from "antd";
import { useSearchContext } from "./SearchContext";
import { Switch, Typography } from 'antd';
import { useState } from "react";
const { Meta } = Card;

export const Cards = () => {
  const [ellipsis, setEllipsis] = useState(true);

  const {
    mtg,
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useSearchContext();

  return (
    <Flex wrap="wrap" justify="center" gap="3%" >
      {mtg.map((item) => {
        const metaProps = {
          title: item.id,
          description: item.description,
          className:"content",
        };

        return (
          <Card
            key={item.url}
            hoverable
            size="small"
            cover={<img alt={item.id} src={item.url} />}
          >
            <Flex
              vertical="false"
              gap="1rem"
              justify="center"
            >
              <Meta
                {...metaProps}
                ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}
              />
              <Button type="primary" onClick={()=>increaseItemQuantity(item.id)}>Add to cart</Button>
            </Flex>
          </Card>
        );
      })}
    </Flex>
  );
};
