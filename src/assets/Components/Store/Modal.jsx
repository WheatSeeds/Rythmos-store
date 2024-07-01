import React from 'react'


const Modal = ({active, setActive, product}) =>{
    return(
        <>
            <div className={active?'modal active':'modal'} onClick={() => {setActive(false)}}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <img src={product.photo} alt={product.name}/>
                    <div className='modal-desc'>
                        <p>{product.name}</p>
                        <p>Description: </p>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal;