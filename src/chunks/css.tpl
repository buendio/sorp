{if $_modx->resource.id != '1' || $_modx->resource.id != '80' || $_modx->resource.id != '477'}
    <style>
        .header, .nav, .bg_article, .bg_first-screen, .block7__item:hover, .block12__item:hover, .block8__item:hover, .block9__item:hover, .block1__item_load-pattern:hover .block1__head, .block1__item_load-pattern .block1__head_active {
            background-color: #{$_modx->resource.link_attributes} !important;
        }
        .block7__item:hover {
            border-color:  #{$_modx->resource.link_attributes} !important;
        }
    </style>
{/if}