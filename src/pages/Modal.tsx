import React, { useState } from 'react';
import './Modal.css';
import { Product } from './ProductList';

const productData: Record<number, { name: string, additionalInfo: string, volumeOptions: Record<number, number> }> = {
    6: {
        name: 'Shampoo Classic',
        additionalInfo: 'Дополнительная информация для продукта 1',
        volumeOptions: {
            150: 450,
            300: 700
        }
    },
    7: {
        name: 'Conditioner',
        additionalInfo: 'Дополнительная информация для продукта 2',
        volumeOptions: {
            200: 500,
            400: 800
        }
    },
    // Добавьте другие продукты здесь...
    // Ваш список продуктов или информацию, которую вы хотели бы здесь видеть
};

interface ModalProps {
    product: Product;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
    const { id, name, description, image, price, category } = product;
    const { additionalInfo, volumeOptions } = productData[id] || { additionalInfo: '', volumeOptions: {} };
    const [selectedVolume, setSelectedVolume] = useState(Object.keys(volumeOptions)[0]);
    const [productPrice, setProductPrice] = useState<number>(price); 

    const handleVolumeChange = (volume: string) => {
        setSelectedVolume(volume);
        const selectedPrice = volumeOptions[parseInt(volume)];
        setProductPrice(selectedPrice);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <div className="modal-body">
                    <img src={image} alt={name} className="modal-image" />
                    <div className="modal-info">
                        <h3>{name}</h3>
                        <p>Description: {description}</p>
                        <div>
                            <label htmlFor="volumeSelect">Volume: </label>
                            <select id="volumeSelect" value={selectedVolume} onChange={(e) => handleVolumeChange(e.target.value)}>
                                {Object.keys(volumeOptions).map((volume) => (
                                    <option key={volume} value={volume}>{volume} ml</option>
                                ))}
                            </select>
                        </div>
                        <p>Additional Info: {additionalInfo}</p>
                        <p>Price: {productPrice} mdl</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
