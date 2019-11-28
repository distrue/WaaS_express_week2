import mongoose from 'mongoose';

export type Daytime = 'morning' | 'afternoon' | 'evening';

export interface Diet extends mongoose.Document {
    month: number,
    date: number,
    daytime: Daytime,
    menus: string[]
}

// mongoose schema: https://mongoosejs.com/docs/api/schema.html#schema_Schema
const schema = new mongoose.Schema({
    month: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: Number
    },
    daytime: {
        required: true,
        type: String
    },
    menus: {
        default: [],
        type: [{
            type: String
        }]
    }
})

// mongoose model: https://mongoosejs.com/docs/models.html
export const DietModel = mongoose.model<Diet>('diet', schema);
