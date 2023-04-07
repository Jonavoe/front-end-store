import { useParams } from 'react-router-dom';
import teclados from '../../Data/Teclados';
import styles from './Detail.module.css';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

export const DetailTeclados = () => {
	const { id } = useParams();
	const product = teclados.items.find((item) => item.id === parseInt(id));
	const value = useContext(DataContext);
	const addCarrito = value.addCarrito;

	return (
		<div className={styles.containerDetail}>
			<div className={styles.detail}>
				<div className={styles.detailPrincipal}>
					<div className={styles.detailImg}>
						<img
							src={product.image}
							alt={product.title}
						/>
					</div>
					<div className={styles.detailText}>
						<div className={styles.title}>
							<h1>{product.title}</h1>
						</div>
						<div className={styles.price}>
							<p>Precio: ${product.price}</p>
						</div>
						<button
							className={styles.btn}
							onClick={() => addCarrito(product.id)}>
							AÑADIR AL CARRITO
						</button>
					</div>
				</div>
			</div>
			<div className={styles.detailFeatures}>
				<div className={styles.features}>
					<p>Cantidad: {product.cantidad}</p>
					<p>Switch: {product.switch}</p>
					<p>Teclado: {product.teclado}</p>
					<p>Color: {product.color}</p>
					<p>Tipo de mecanismo: {product.mecanismo}</p>
				</div>
				<div className={styles.features}>
					<p>Tipo de Switch especifico:{product.switchEspecífico}</p>
					<p>Material: {product.material}</p>
					<p>Touchpad: {product.touchpad}</p>
					<p>Pad numerico: {product.padNumérico}</p>
				</div>
			</div>
		</div>
	);
};
