import Header from './header'
// import Body from './body'
// import Article from './article'
// import List from './list'
// import Footer from './footer'

(() => {
    console.log('start');
    const files = [
        'header',
        'body',
        'article',
        'list',
        'footer'
    ]

    let i = 0;

    for (const file of files) {
        i++;

        /**
         * The webpackChunkName actually doesn't work and seems like a known bug,
         * but I just want to keep it there to remember those comments are actually
         * a feature. There's also "webpackMode": "lazy", "eager", etc.
        */
        setTimeout(async () => {
            const module = await import(/* webpackChunkName: `${file}` */ `./${file}`);
            new module.default();
        }, 3000 * i);
    }

    console.log('end');
})();