export default  function OurTop({h1,span,h1Class,spanClass,children,className}) {
    return(
        <div className={`flex flex-col items-center mt-[60px] ${className}`}>
            <h1 className={h1Class} style={{fontFamily:'Poppins'}}>{h1} <span className={spanClass}>{span}</span></h1>
            {children}
        </div>
    )
}