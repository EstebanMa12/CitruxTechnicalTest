/* eslint-disable @typescript-eslint/no-unused-vars */
import { prop, getModelForClass } from "@typegoose/typegoose";

class IArticle {
    @prop({ required: true})
    url!: string;

    @prop({ required: true })
    content!: string;

    @prop({ required: true })
    createdAt!: Date;
}

const ArticleModel = getModelForClass(IArticle);

export default ArticleModel;