import {TileDrawer} from '../TruchetTileGrid';

export const triangularPatternTileDrawers: TileDrawer[] = [
    // top left filled:
    ({ctx, tileSize, topLeftXCoord, topLeftYCoord}) => {
        ctx.beginPath();
        ctx.moveTo(topLeftXCoord, topLeftYCoord);
        ctx.lineTo(topLeftXCoord + tileSize, topLeftYCoord);
        ctx.lineTo(topLeftXCoord, topLeftYCoord + tileSize);
        ctx.fill();
    },
    // top right filled:
    ({ctx, tileSize, topLeftXCoord, topLeftYCoord}) => {
        ctx.beginPath();
        ctx.moveTo(topLeftXCoord, topLeftYCoord);
        ctx.lineTo(topLeftXCoord + tileSize, topLeftYCoord);
        ctx.lineTo(topLeftXCoord + tileSize, topLeftYCoord + tileSize);
        ctx.fill();
    },
    // bottom right filled
    ({ctx, tileSize, topLeftXCoord, topLeftYCoord}) => {
        ctx.beginPath();
        ctx.moveTo(topLeftXCoord + tileSize, topLeftYCoord + tileSize);
        ctx.lineTo(topLeftXCoord + tileSize, topLeftYCoord);
        ctx.lineTo(topLeftXCoord, topLeftYCoord + tileSize);
        ctx.fill();
    },
    // bottom left filled
    ({ctx, tileSize, topLeftXCoord, topLeftYCoord}) => {
        ctx.beginPath();
        ctx.moveTo(topLeftXCoord, topLeftYCoord);
        ctx.lineTo(topLeftXCoord + tileSize, topLeftYCoord + tileSize);
        ctx.lineTo(topLeftXCoord, topLeftYCoord + tileSize);
        ctx.fill();
    }
];
