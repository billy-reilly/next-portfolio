import React from 'react';
import style from './TruchetTileGrid.module.css';

// TODO
// const MIN_TILE_SIZE = 100;
// const MAX_TILE_SIZE = 200;

const NUMBER_OF_COLUMNS = 10;
const NUMBER_OF_ROWs = 10;

// TODO
// enum Patterns {
//     CIRCULAR = 'circular',
//     TRIANGULAR = 'triangular'
// }

const drawTileA = (
    ctx: CanvasRenderingContext2D,
    tileSize: number,
    topLeftXCoord: number,
    topLeftYCoord: number
): void => {
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
};

const drawTileB = (
    ctx: CanvasRenderingContext2D,
    tileSize: number,
    topLeftXCoord: number,
    topLeftYCoord: number
): void => {
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
};

const draw = (
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    tileWidth: number,
    gridTileStartingCoords: [number, number][]
): void => {
    if (ctx) {
        ctx.lineWidth = Math.ceil(canvasWidth / 50);
        ctx.strokeStyle = 'black';
        gridTileStartingCoords.forEach(([x, y]) => {
            if (Math.random() > 0.5) {
                drawTileA(ctx, tileWidth, x, y);
            } else {
                drawTileB(ctx, tileWidth, x, y);
            }
        });
    }
};

export const TruchetTileGrid: React.FC = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    const [availableWidth, setAvailableWidth] = React.useState<
        number | undefined
    >(undefined);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const updateAvailableWidth = () => {
                setAvailableWidth(Math.floor(canvas.clientWidth));
            };
            updateAvailableWidth();

            // TODO: throttle / debounce
            window.addEventListener('resize', updateAvailableWidth);
            return () => {
                window.removeEventListener('resize', updateAvailableWidth);
            };
        }
    }, []);

    React.useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas || !availableWidth) return;

        const ctx = canvas.getContext('2d');
        if (ctx) {
            canvas.style.height = `${availableWidth}px`;
            const scale = window.devicePixelRatio;
            canvas.width = availableWidth * scale;
            canvas.height = availableWidth * scale;
            ctx.scale(scale, scale);

            const tileSize = availableWidth / NUMBER_OF_COLUMNS;

            const gridTileStartingXCoords = Array.from(
                Array(NUMBER_OF_COLUMNS).keys()
            ).map((i) => i * tileSize);
            const gridTileStartingYCoords = Array.from(
                Array(NUMBER_OF_ROWs).keys()
            ).map((i) => i * tileSize);

            const gridTileStartingCoords = gridTileStartingYCoords.reduce<
                [number, number][]
            >((acc, y) => {
                return acc.concat(gridTileStartingXCoords.map((x) => [x, y]));
            }, []);

            draw(ctx, availableWidth, tileSize, gridTileStartingCoords);
        }
    }, [canvasRef, availableWidth]);

    return (
        <div>
            <div className={style.patternContainer}>
                <button
                    className={style.canvasButton}
                    onClick={() => {
                        // TODO: draw new pattern
                        console.log('click');
                    }}
                >
                    <div className={style.canvasHeightConstrainer}>
                        <canvas
                            role="img"
                            aria-label="Click to generate new pattern"
                            ref={canvasRef}
                            className={style.canvas}
                        ></canvas>
                    </div>
                </button>
            </div>

            <div className={style.instruction} aria-hidden="true">
                <div className={style.floatingText}>
                    ☝️ <em>Click to generate new pattern</em>
                </div>
            </div>
        </div>
    );
};
