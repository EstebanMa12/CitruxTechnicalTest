import { prop, getModelForClass, Ref} from '@typegoose/typegoose';
import { IArticle } from './article';

export class userQuestion{
    role!: string;
    content!: string;
}

export class Query {
    @prop({ required: true })
    userQuestions!: userQuestion[];

    @prop({ required: true })
    aiResponse!: string;

    @prop({ ref: () => IArticle})
    articleId!: Ref<IArticle>;
}

const QueryModel = getModelForClass(Query);

export default QueryModel;
