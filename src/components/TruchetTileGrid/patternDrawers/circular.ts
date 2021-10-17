import {TileDrawer} from '../TruchetTileGrid';

export const circularPatternTileDrawers: TileDrawer[] = [
    ({ctx, tileSize, topLeftXCoord, topLeftYCoord}) => {
        ctx.beginPath();
        ctx.moveTo(topLeftXCoord + tileSize, topLeftYCoord + tileSize / 2);
        ctx.arc(
            topLeftXCoord + tileSize,
            topLeftYCoord,
            tileSize / 2,
            Math.PI / 2,
            Math.PI
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(topLeftXCoord, topLeftYCoord + tileSize / 2);
        ctx.arc(
            topLeftXCoord,
            topLeftYCoord + tileSize,
            tileSize / 2,
            (3 * Math.PI) / 2,
            0
        );
        ctx.stroke();
    },
    ({ctx, tileSize, topLeftXCoord, topLeftYCoord}) => {
        ctx.beginPath();
        ctx.moveTo(topLeftXCoord + tileSize / 2, topLeftYCoord);
        ctx.arc(topLeftXCoord, topLeftYCoord, tileSize / 2, 0, Math.PI / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(topLeftXCoord + tileSize / 2, topLeftYCoord + tileSize);
        ctx.arc(
            topLeftXCoord + tileSize,
            topLeftYCoord + tileSize,
            tileSize / 2,
            Math.PI,
            (3 * Math.PI) / 2
        );
        ctx.stroke();
    }
];
