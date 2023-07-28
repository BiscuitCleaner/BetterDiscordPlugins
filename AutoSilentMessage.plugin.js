/**
 * @name AutoSilentMessage
 * @author glorytotheprc
 * @authorId 869418754348580885
 * @version 1.0.0
 * @description Make every message silent.
 */


const BD = new BdApi("AutoSilentMessage");
const { Filters, getModule } = BD.Webpack;

const MessageActionsFilter = Filters.byProps("jumpToMessage", "_sendMessage");
const MessageActions = getModule(m => MessageActionsFilter(m));

module.exports = meta => ({
    start() {
        BD.Patcher.before(MessageActions, "sendMessage", (_, [, msg]) => {
            msg.content = '@silent ' + msg.content
        });
    },
    stop() {
        BD.Patcher.unpatchAll();
    }
});