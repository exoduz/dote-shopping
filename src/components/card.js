import React from 'react';

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
					{ data.msrp && <span className="card__msrp">{ `$${ Number( data.msrp / 100 ).toFixed(2) }` }</span> }
				</p>
			</div>
		</div>
	);
};

export default Card;
