import { prop, getModelForClass, Ref} from '@typegoose/typegoose';
import { IArticle } from './article';

export class questionResponse{
    @prop()
    role!: string;
    @prop()
    content!: string;
}

export class Query {
    @prop({ required: true })
    userQuestion!: questionResponse;

    @prop({ required: true })
    aiResponse!: questionResponse;

    @prop({ ref: () => IArticle})
    articleId!: Ref<IArticle>;

    @prop({ required: true })
    createdAt!: Date;
}

const QueryModel = getModelForClass(Query);

export default QueryModel;
