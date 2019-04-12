import React from 'react';
/**
 * Get the percentage discount of price from msrp.
 * @param  {Number} price The price of the item.
 * @param  {Number} msrp  The MSRP of the item.
 * @return {XML}
 */
const discountPercentage = ( price, msrp ) => {
	if ( ! price || ! msrp ) {
		return;
	}

	if ( price === msrp ) {
		return;
	}

	let discount = Math.floor( ( price / msrp ) * 100 );

	return <span className="card__discount">{ `${ discount }% off` }</span>;
}

/**
 * Output a card.
 * @param  {Object} options.data The item data.
 * @return {XML}
 */
const Card = ( { data } ) => {
	return (
		<div className="card">
			{ 'url' in data.image && <img
				src={ data.image.url }
				alt={ data.name }
			/> }
			<div className="card__content">
				<p>
					{ data.store_name && <span className="card__store">{ data.store_name }<br /></span> }
					{ data.name && <span className="card__name">{ data.name }<br /></span> }
					{ data.price && <span className="card__price">{ `$${ Number( data.price / 100 ).toFixed(2) }` }</span> }
					{ data.msrp
						&& data.price !== data.msrp
						&& <span className="card__msrp">{ `$${ Number( data.msrp / 100 ).toFixed(2) }` }</span>
					}
					{ data.price
						&& data.msrp
						&& data.price !== data.msrp
						&& discountPercentage( data.price, data.msrp )
					}
				</p>
			</div>
		</div>
	);
};

export default Card;
