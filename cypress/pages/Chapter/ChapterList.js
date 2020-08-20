export default class ChapterList {

    static chapterRecordByName = recordName => ('tbody td').withText(recordName);

    static dotsRecordButton = name => ChapterList.chapterRecordByName(name).find('[data-testid="actions-dropdown"]');
}