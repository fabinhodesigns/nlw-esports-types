import cors from 'cors';
import express from 'express'
import { PrismaClient } from '.prisma/client';
import { convertMinuteStringToHour } from './utils/convert-minutes-string-to-hour';
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';

const app = express();
app.use(cors());

app.use(express.json());

const prisma = new PrismaClient({
    log: ['query']
});

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    });

    return res.json( games );
});

app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    return res.json( ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinuteStringToHour(ad.hourStart),
            hourEnd: convertMinuteStringToHour(ad.hourEnd),
        }
    }));
});

app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where : {
            id: adId
        }

    });

    return res.json({
        discord: ad.discord
    });

    return res.json([])
});

app.post('/games/:id/ads',async (req, res) => {
    const gameId = req.params.id;
    const body: any = req.body;

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        }
    });

    
    return res.json(ad);
});

app.post('/createdAt', (req, res) => {
    return res.json([]);
});

app.listen(3333);