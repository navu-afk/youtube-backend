import mongoose, {Schema} from "mongoose";
import mongooseAgregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile: {
            type: String,   //cloudinary url
            required: true
        },
        thumbnail: {
            required: true,
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
        description: {
            required: true,
            type: String,
        },
        duration: {
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {timestamps: true}
)

videoSchema.plugin(mongooseAgregatePaginate)
export const Video = Schema.model("Video",videoSchema)