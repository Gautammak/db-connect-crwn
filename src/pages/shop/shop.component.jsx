import React from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/Collection-Preview /Collection-Preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {

    const {collection} = this.state;
    return (<div className="shop-page">

    {
        collection.map(({id, ...otherCollectionProps}) =>  (
            <CollectionPreview key ={id} {...otherCollectionProps} />

            ))

    }
        </div>);
  }
}

export default ShopPage;
