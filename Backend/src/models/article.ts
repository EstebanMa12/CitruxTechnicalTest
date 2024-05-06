import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Query } from './query'; // Import the Query type from the appropriate module

export class IArticle {
    @prop({ required: true, trim: true })
    url!: string;

    @prop({ required: true })
    content!: string;

    @prop({ required: true })
    createdAt!: Date;

    // Optionally, if you want to reference the chat history directly
    @prop({ ref: () => Query })
    chatHistory!: Ref<Query>[];
}

const ArticleModel = getModelForClass(IArticle);

export default ArticleModel;
