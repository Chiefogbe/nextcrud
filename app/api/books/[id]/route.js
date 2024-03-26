import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, {params}) {
    const { id } = params;
    
    // Get the book with the given ID from the database...
    const book = await prisma.book.findUnique({
        where: {
            id: id
        }
    });

    return NextResponse.json(book, { status: 200 });
}


export async function PATCH(request, {params}) {
    const { id } = params;
    const { title, date } = await request.json();

    // Update the book with the given ID in the database...
    const book = await prisma.book.update({
        where: {
            id: id
        },
        data: {
            title: title,
            date: date
        }
    });

    return NextResponse.json(book, { status: 200 });
}