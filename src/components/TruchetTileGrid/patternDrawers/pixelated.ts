import {TileDrawer} from '../TruchetTileGrid';

export const pixelatedPatternTileDrawers: TileDrawer[] = [
    ({ctx, tileSize, topLeftXCoord, topLeftYCoord}) => {
        const stepSize = tileSize / 20;
        ctx.beginPath();
        ctx.moveTo(topLeftXCoord, topLeftYCoord + 10 * stepSize);
        ctx.lineTo(topLeftXCoord + 3 * stepSize, topLeftYCoord + 10 * stepSize);
        ctx.lineTo(topLeftXCoord + 3 * stepSize, topLeftYCoord + 3 * stepSize);
        ctx.lineTo(topLeftXCoord + 10 * stepSize, topLeftYCoord + 3 * stepSize);
        ctx.lineTo(topLeftXCoord + 10 * stepSize, topLeftYCoord);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(
            topLeftXCoord + 10 * stepSize,
            topLeftYCoord + 20 * stepSize
        );
        ctx.lineTo(
            topLeftXCoord + 10 * stepSize,
            topLeftYCoord + 17 * stepSize
        );
        ctx.lineTo(
            topLeftXCoord + 17 * stepSize,
            topLeftYCoord + 17 * stepSize
        );
        ctx.lineTo(
            topLeftXCoord + 17 * stepSize,
            topLeftYCoord + 10 * stepSize
        );
        ctx.lineTo(
            topLeftXCoord + 20 * stepSize,
            topLeftYCoord + 10 * stepSize
        );
        ctx.stroke();
    },
    ({ctx, tileSize, topLeftXCoord, topLeftYCoord}) => {
        const stepSize = tileSize / 20;
        ctx.beginPath();
        ctx.moveTo(topLeftXCoord, topLeftYCoord + 10 * stepSize);
        ctx.lineTo(topLeftXCoord + 3 * stepSize, topLeftYCoord + 10 * stepSize);
        ctx.lineTo(topLeftXCoord + 3 * stepSize, topLeftYCoord + 17 * stepSize);
        ctx.lineTo(
            topLeftXCoord + 10 * stepSize,
            topLeftYCoord + 17 * stepSize
        );
        ctx.lineTo(topLeftXCoord + 10 * stepSize, topLeftYCoord + tileSize);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(topLeftXCoord + 10 * stepSize, topLeftYCoord);
        ctx.lineTo(topLeftXCoord + 10 * stepSize, topLeftYCoord + 3 * stepSize);
        ctx.lineTo(topLeftXCoord + 17 * stepSize, topLeftYCoord + 3 * stepSize);
        ctx.lineTo(
            topLeftXCoord + 17 * stepSize,
            topLeftYCoord + 10 * stepSize
        );
        ctx.lineTo(
            topLeftXCoord + 20 * stepSize,
            topLeftYCoord + 10 * stepSize
        );
        ctx.stroke();
    }
];
