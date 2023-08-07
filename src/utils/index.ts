import { documentToHtmlString, Options } from '@contentful/rich-text-html-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';

const options: Options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img src="${node.data.target.fields.file.url}" width="100%"/>`
        },
    }
}

export   function richTextToHtml(richText: Document) {
    return documentToHtmlString(richText, options);
}