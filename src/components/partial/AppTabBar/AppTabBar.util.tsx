export const getPath = (
    y: number,
    x: number,
    width: number,
    height: number,
) => {
    const anchorDistance = 200 + x * 0.5;
    const curviness = anchorDistance - 60;

    return `M0, 
        ${height} 
        H0V0h${width}v 
        ${y - anchorDistance} 
        c0, 
        ${curviness} 
        , 
       ${x} 
        , 
        ${curviness} 
        , 
       ${x} 
        , 
        ${anchorDistance} 
        S${width}, 
        ${y} 
        ,${width}, 
        ${y + anchorDistance * 2}
        V
        ${height}
        z`;
};
