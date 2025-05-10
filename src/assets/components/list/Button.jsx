export function Button({children, buttonClassName='', onClick,img='',imgClassName=''} ) {
    return (
        <button className={buttonClassName} onClick={onClick}>
            {children}{img && <img src={img} className={imgClassName} />}
        </button>
    )
}