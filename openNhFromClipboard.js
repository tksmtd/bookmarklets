javascript:
navigator.clipboard.readText().then((query) => {
    const url = `https://www.kosho.or.jp/products/list.php?transactionid=755c83ac827278b55c05af487637eb5be4750e0f&mode=search_retry&pageno=&search_pageno=1&product_id=&reset_baseinfo_id=&baseinfo_id=&product_class_id=&quantity=1&from_mode=&search_facet_publisher=&search_word=${query}&search_name=&search_name_matchtype=like&search_author=&search_author_matchtype=like&search_publisher=&search_publisher_matchtype=like&search_isbn=&search_published_year_min=&search_published_year_max=&search_comment4=&search_comment4_matchtype=like&search_book_flg=&search_price_min=&search_price_max=&search_only_has_stock=1&search_orderby=price&search_sorttype=asc&search_page_max=50&search_image_disp=&search_adult=2&transactionid=755c83ac827278b55c05af487637eb5be4750e0f`;

    console.log(`Copyed Amazon Searchbar Text "${query}"`);
    window.open = (url);
});
