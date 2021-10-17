import {TileDrawer} from '../TruchetTileGrid';

export const diagonalPatternTileDrawers: TileDrawer[] = [
    ({ctx, tileSize, topLeftXCoord, topLeftYCoord}) => {
        const stepSize = tileSize / 10;
        ctx.beginPath();
        ctx.moveTo(topLeftXCoord, topLeftYCoord + 4 * stepSize);
        ctx.lineTo(topLeftXCoord + 4 * stepSize, topLeftYCoord);
        ctx.lineTo(topLeftXCoord + 6 * stepSize, topLeftYCoord);
        ctx.lineTo(topLeftXCoord, topLeftYCoord + 6 * stepSize);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(topLeftXCoord + 4 * stepSize, topLeftYCoord + 10 * stepSize);
        ctx.lineTo(topLeftXCoord + 10 * stepSize, topLeftYCoord + 4 * stepSize);
        ctx.lineTo(topLeftXCoord + 10 * stepSize, topLeftYCoord + 6 * stepSize);
        ctx.lineTo(topLeftXCoord + 6 * stepSize, topLeftYCoord + 10 * stepSize);
        ctx.fill();
    },
    ({ctx, tileSize, topLeftXCoord, topLeftYCoord}) => {
        const stepSize = tileSize / 10;
        ctx.beginPath();
        ctx.moveTo(topLeftXCoord, topLeftYCoord + 4 * stepSize);
        ctx.lineTo(topLeftXCoord + 6 * stepSize, topLeftYCoord + 10 * stepSize);
        ctx.lineTo(topLeftXCoord + 4 * stepSize, topLeftYCoord + 10 * stepSize);
        ctx.lineTo(topLeftXCoord, topLeftYCoord + 6 * stepSize);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(topLeftXCoord + 4 * stepSize, topLeftYCoord);
        ctx.lineTo(topLeftXCoord + 6 * stepSize, topLeftYCoord);
        ctx.lineTo(topLeftXCoord + 10 * stepSize, topLeftYCoord + 4 * stepSize);
        ctx.lineTo(topLeftXCoord + 10 * stepSize, topLeftYCoord + 6 * stepSize);
        ctx.fill();
    }
];
