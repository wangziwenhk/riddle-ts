import init from 'libclangjs/node.js';

(async () => {
    const clang = await init();
    clang.FS.mkdir('/workspace');
    clang.FS.mount(clang.NODEFS, {root: '.'}, '/workspace');
    const code = 'int foo(int x) { return x * 2; }';
    clang.FS.writeFile('/workspace/test.c', code);
    const tu = clang.parseTranslationUnit(
        clang.createIndex(0, 0),
        '/workspace/test.c',
        ['-xc'],
        null,
        0
    );
    const root = clang.getTranslationUnitCursor(tu);
    clang.visitChildren(root, (c) => {
        console.log('Cursor kind:', clang.getCursorSpelling(c)?.toString());
        return clang.CXChildVisitResult.Recurse;
    });
})();
