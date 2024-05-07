import { prop, getModelForClass} from '@typegoose/typegoose';
// import { Query } from './query'; 

export class IArticle {
    @prop({ required: true, trim: true })
    url!: string;

    @prop({ required: true })
    content!: string;

    @prop({ required: true })
    createdAt!: Date;

    // @prop({ ref: () => Query })
    // chatHistory!: Ref<Query>[];
}

const ArticleModel = getModelForClass(IArticle);

export default ArticleModel;
