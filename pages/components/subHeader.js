export default ({ subHeader, content, noBorder, invertColors, headerStyles, contentStyles, style }) => (
        <div className={`sub-header ${invertColors ? 'invert' : null}`} style={style}>
           <div className="sub-header__wrapper flex flex-row">
                <span className='sub-header__border rounded-full'></span>
                <h3 style={headerStyles}>{subHeader}</h3>
           </div>
            <p style={contentStyles}>{content}</p>
        </div>
)