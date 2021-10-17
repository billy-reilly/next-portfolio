import React from 'react';
import style from './TruchetTileGrid.module.css';

import {selectRandomArrayElement} from '../../utils/random';
import {circularPatternTileDrawers} from './patternDrawers/circular';
import {triangularPatternTileDrawers} from './patternDrawers/triangular';
import {pixelatedPatternTileDrawers} from './patternDrawers/pixelated';
import {diagonalPatternTileDrawers} from './patternDrawers/diagonal';

const NUMBER_OF_COLUMNS = 10;
const NUMBER_OF_ROWs = 10;

enum Pattern {
    CIRCULAR = 'circular',
    PIXELATED = 'pixelated',
    DIAGONAL = 'diagonal',
    TRIANGULAR = 'triangular'
}

const patterns = Object.values(Pattern);

interface TileDrawerArgs {
    ctx: CanvasRenderingContext2D;
    tileSize: number;
    topLeftXCoord: number;
    topLeftYCoord: number;
}

export type TileDrawer = (args: TileDrawerArgs) => void;

const getPatternDrawers = (pattern: Pattern): TileDrawer[] => {
    if (pattern === Pattern.CIRCULAR) {
        return circularPatternTileDrawers;
    }
    if (pattern === Pattern.PIXELATED) {
        return pixelatedPatternTileDrawers;
    }
    if (pattern === Pattern.DIAGONAL) {
        return diagonalPatternTileDrawers;
    }
    return triangularPatternTileDrawers;
};

const draw = (
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    tileSize: number,
    gridTileStartingCoords: [number, number][],
    pattern: Pattern
): void => {
    if (ctx) {
        ctx.lineWidth = Math.ceil(canvasWidth / 50);
        ctx.strokeStyle = 'black';
        gridTileStartingCoords.forEach(([x, y]) => {
            const patternDrawers = getPatternDrawers(pattern);
            selectRandomArrayElement(patternDrawers)({
                ctx,
                tileSize,
                topLeftXCoord: x,
                topLeftYCoord: y
            });
        });
    }
};

export const TruchetTileGrid: React.FC = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [pattern, setPattern] = React.useState<Pattern>(Pattern.CIRCULAR);
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

            draw(
                ctx,
                availableWidth,
                tileSize,
                gridTileStartingCoords,
                pattern
            );
        }
    }, [canvasRef, availableWidth, pattern]);

    const handleClick = React.useCallback(() => {
        const currentIndex = patterns.indexOf(pattern);
        if (currentIndex < patterns.length - 1) {
            setPattern(patterns[currentIndex + 1]);
        } else {
            setPattern(patterns[0]);
        }
    }, [pattern, setPattern]);

    return (
        <div>
            <div className={style.patternContainer}>
                <button className={style.canvasButton} onClick={handleClick}>
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
