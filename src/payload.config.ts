import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { buildConfig } from "payload/config";
import { Users } from "./app/collections/Users";

export default buildConfig({
	serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
	collections: [Users],
	routes: {
		admin: '/sell'
	},
	admin: {
		user: "users",
		bundler: webpackBundler(),
		meta: {
			titleSuffix: "- The-UI",
			favicon: "/favicon.ico",
			ogImage: "/thumnnail.jpg"
		/*add images with those names in public folder don't forget */
		},
	},
	rateLimit: {
		max: 2000,
	},
	editor: slateEditor({}),
	db: mongooseAdapter({
		url: process.env.MONGODB_URL!,
	}),
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	}

})