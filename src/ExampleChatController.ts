import { Request, Response, NextFunction } from 'express';
import {anthropic} from "./lib/anthropicClient";

export async function ChatController(req: Request, res: Response, next: NextFunction) {
    const message = req.body?.message;
    console.log(message);
    const chatResponse = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        messages: [{ role: "user", content: message }],
      });

    res.status(200).json(chatResponse);
}
