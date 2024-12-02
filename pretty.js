setTimeout(() => {
    // 创建样式字符串
    var css = `
        .editor-container, /* 主编辑区 */
        .context-pill.context-pill-default, /* 显示引用的文件名 */
        .view-lines.monaco-mouse-cursor-text, /* 代码块内容 */
        .pane-body {
            font-family: PingFang SC Heavy !important; 
            font-size: 20px !important; 
        }

        .picker-menu-item-content, /* 添加文件前小图标和内容间距 */
        .monaco-icon-label-container { /* 项目列表文件前小图标和内容间距 */
            margin-left: 5px; /* 增加左边距 */
        }

        .show-file-icons { /* 添加文件里显示详细路径小图标和内容间距 */
            margin-right: 5px; /* 增加右边距 */
        }

        .input-box-button, /* 模型选择下拉按钮 */
        .composer-bar-button, /* 图片文件选择按钮 */
        .composer-button-area>button, /* submit按钮和codebase按钮 */
        .composer-button-area>div, /* composer右下角的normal/agent */
        .ya-solid-dropdown-menu, /* 模型选择下拉 */
        .premium-pill.premium-pill-default, /* 添加文件前小图标 */
        .codicon.codicon-add + span, /* 添加文件 */
        .picker-menu-section-header, /* 增加文件下拉列表available */
        .show-file-icons, /* 增加文件下拉列表文件前面图标 */
        .fade-in-fast > div > div > span, /* 增加文件下拉列表的详情 */
        .picker-menu-item-title, /* 增加文件下拉列表文件名 */
        .monaco-highlighted-label, /* 增加文件下拉列表文件右边路径 */
        .ya-solid-dropdown-menu input, /* 模型选择下拉 模型搜索 */
        .monaco-scrollable-element, /* 菜单栏 */
        .codicon.codicon-chevron-right ~ div, /* composer的已选文件名字 */
        .ya-solid-dropdown-menu div { /* 模型选择下拉 模型列表 */
            font-size: 18px !important; 
        }

        /* 主编辑区触发功能后*/
        .cursor-button.cursor-button-secondary.cursor-button-secondary-clickable, /* Esc to Close */
        .cursor-button.cursor-button-secondary.cursor-button-not-clickable, /* Ctrl+Shift+K to toggle */
        div:has(>.aislash-editor-input), /* 输入框 */
        .cursor-button.cursor-button-primary.cursor-button-primary-clickable, {/* GENERATE按钮 */
            font-size: 15px !important; 
        }

        /* 处理一下因为字体变大，高度不够，border遮挡了文字的问题 */
        .premium-pill.premium-pill-default,
        .context-pill {
            height: 1.5em; /* 1.5 倍字体大小 */
        }

        /* 所有span的行高都设置为1.5倍字体大小 */
        span {
            line-height: 1.5em;
        }

        /* 各种小图标 */
        .codicon.codicon-semantic,
        .codicon.codicon-github-copilot,
        .codicon.codicon-plus-circle,
        .codicon.codicon-smiley-sad,
        .codicon.codicon-smiley-happy,
        .codicon.codicon-smiley-medium,
        .codicon.codicon-sparkle-strikethrough,
        .codicon.codicon-key-plus-sparkle,
        .codicon.codicon-paperclip,
        .codicon.codicon-at-sign,
        .codicon.codicon-image,
        .codicon.codicon-logo,
        .codicon.codicon-sparkle-two,
        .codicon.codicon-logo-slash,
        .codicon.codicon-add,
        .codicon.codicon-plus,
        .codicon.codicon-gist-new,
        .codicon.codicon-repo-create,
        .codicon.codicon-lightbulb,
        .codicon.codicon-light-bulb,
        .codicon.codicon-repo,
        .codicon.codicon-repo-delete,
        .codicon.codicon-gist-fork,
        .codicon.codicon-repo-forked,
        .codicon.codicon-git-pull-request,
        .codicon.codicon-git-pull-request-abandoned,
        .codicon.codicon-record-keys,
        .codicon.codicon-keyboard,
        .codicon.codicon-tag,
        .codicon.codicon-git-pull-request-label,
        .codicon.codicon-tag-add,
        .codicon.codicon-tag-remove,
        .codicon.codicon-person,
        .codicon.codicon-person-follow,
        .codicon.codicon-person-outline,
        .codicon.codicon-person-filled,
        .codicon.codicon-git-branch,
        .codicon.codicon-git-branch-create,
        .codicon.codicon-git-branch-delete,
        .codicon.codicon-source-control,
        .codicon.codicon-mirror,
        .codicon.codicon-mirror-public,
        .codicon.codicon-star,
        .codicon.codicon-star-add,
        .codicon.codicon-star-delete,
        .codicon.codicon-star-empty,
        .codicon.codicon-comment,
        .codicon.codicon-comment-add,
        .codicon.codicon-alert,
        .codicon.codicon-warning,
        .codicon.codicon-search,
        .codicon.codicon-search-save,
        .codicon.codicon-log-out,
        .codicon.codicon-sign-out,
        .codicon.codicon-log-in,
        .codicon.codicon-sign-in,
        .codicon.codicon-eye,
        .codicon.codicon-eye-unwatch,
        .codicon.codicon-eye-watch,
        .codicon.codicon-circle-filled,
        .codicon.codicon-primitive-dot,
        .codicon.codicon-close-dirty,
        .codicon.codicon-debug-breakpoint,
        .codicon.codicon-debug-breakpoint-disabled,
        .codicon.codicon-debug-hint,
        .codicon.codicon-terminal-decoration-success,
        .codicon.codicon-primitive-square,
        .codicon.codicon-edit,
        .codicon.codicon-pencil,
        .codicon.codicon-info,
        .codicon.codicon-issue-opened,
        .codicon.codicon-gist-private,
        .codicon.codicon-git-fork-private,
        .codicon.codicon-lock,
        .codicon.codicon-mirror-private,
        .codicon.codicon-close,
        .codicon.codicon-remove-close,
        .codicon.codicon-x,
        .codicon.codicon-repo-sync,
        .codicon.codicon-sync,
        .codicon.codicon-clone,
        .codicon.codicon-desktop-download,
        .codicon.codicon-beaker,
        .codicon.codicon-microscope,
        .codicon.codicon-vm,
        .codicon.codicon-device-desktop,
        .codicon.codicon-file,
        .codicon.codicon-file-text,
        .codicon.codicon-more,
        .codicon.codicon-ellipsis,
        .codicon.codicon-kebab-horizontal,
        .codicon.codicon-mail-reply,
        .codicon.codicon-reply,
        .codicon.codicon-organization,
        .codicon.codicon-organization-filled,
        .codicon.codicon-organization-outline,
        .codicon.codicon-new-file,
        .codicon.codicon-file-add,
        .codicon.codicon-new-folder,
        .codicon.codicon-file-directory-create,
        .codicon.codicon-trash,
        .codicon.codicon-trashcan,
        .codicon.codicon-history,
        .codicon.codicon-clock,
        .codicon.codicon-folder,
        .codicon.codicon-file-directory,
        .codicon.codicon-symbol-folder,
        .codicon.codicon-logo-github,
        .codicon.codicon-mark-github,
        .codicon.codicon-github,
        .codicon.codicon-terminal,
        .codicon.codicon-console,
        .codicon.codicon-repl,
        .codicon.codicon-zap,
        .codicon.codicon-symbol-event,
        .codicon.codicon-error,
        .codicon.codicon-stop,
        .codicon.codicon-variable,
        .codicon.codicon-symbol-variable,
        .codicon.codicon-array,
        .codicon.codicon-symbol-array,
        .codicon.codicon-symbol-module,
        .codicon.codicon-symbol-package,
        .codicon.codicon-symbol-namespace,
        .codicon.codicon-symbol-object,
        .codicon.codicon-symbol-method,
        .codicon.codicon-symbol-function,
        .codicon.codicon-symbol-constructor,
        .codicon.codicon-symbol-boolean,
        .codicon.codicon-symbol-null,
        .codicon.codicon-symbol-numeric,
        .codicon.codicon-symbol-number,
        .codicon.codicon-symbol-structure,
        .codicon.codicon-symbol-struct,
        .codicon.codicon-symbol-parameter,
        .codicon.codicon-symbol-type-parameter,
        .codicon.codicon-symbol-key,
        .codicon.codicon-symbol-text,
        .codicon.codicon-symbol-reference,
        .codicon.codicon-go-to-file,
        .codicon.codicon-symbol-enum,
        .codicon.codicon-symbol-value,
        .codicon.codicon-symbol-ruler,
        .codicon.codicon-symbol-unit,
        .codicon.codicon-activate-breakpoints,
        .codicon.codicon-archive,
        .codicon.codicon-arrow-both,
        .codicon.codicon-arrow-down,
        .codicon.codicon-arrow-left,
        .codicon.codicon-arrow-right,
        .codicon.codicon-arrow-small-down,
        .codicon.codicon-arrow-small-left,
        .codicon.codicon-arrow-small-right,
        .codicon.codicon-arrow-small-up,
        .codicon.codicon-arrow-up,
        .codicon.codicon-bell,
        .codicon.codicon-bold,
        .codicon.codicon-book,
        .codicon.codicon-bookmark,
        .codicon.codicon-debug-breakpoint-conditional-unverified,
        .codicon.codicon-debug-breakpoint-conditional,
        .codicon.codicon-debug-breakpoint-conditional-disabled,
        .codicon.codicon-debug-breakpoint-data-unverified,
        .codicon.codicon-debug-breakpoint-data,
        .codicon.codicon-debug-breakpoint-data-disabled,
        .codicon.codicon-debug-breakpoint-log-unverified,
        .codicon.codicon-debug-breakpoint-log,
        .codicon.codicon-debug-breakpoint-log-disabled,
        .codicon.codicon-briefcase,
        .codicon.codicon-broadcast,
        .codicon.codicon-browser,
        .codicon.codicon-bug,
        .codicon.codicon-calendar,
        .codicon.codicon-case-sensitive,
        .codicon.codicon-check,
        .codicon.codicon-checklist,
        .codicon.codicon-chevron-down,
        .codicon.codicon-chevron-left,
        .codicon.codicon-chevron-right,
        .codicon.codicon-chevron-up,
        .codicon.codicon-chrome-close,
        .codicon.codicon-chrome-maximize,
        .codicon.codicon-chrome-minimize,
        .codicon.codicon-chrome-restore,
        .codicon.codicon-circle-outline,
        .codicon.codicon-circle,
        .codicon.codicon-debug-breakpoint-unverified,
        .codicon.codicon-terminal-decoration-incomplete,
        .codicon.codicon-circle-slash,
        .codicon.codicon-circuit-board,
        .codicon.codicon-clear-all,
        .codicon.codicon-clippy,
        .codicon.codicon-close-all,
        .codicon.codicon-cloud-download,
        .codicon.codicon-cloud-upload,
        .codicon.codicon-code,
        .codicon.codicon-collapse-all,
        .codicon.codicon-color-mode,
        .codicon.codicon-menubar-more,
        .codicon.codicon-open-preview,
        .codicon.codicon-copy,
        .codicon.codicon-eye-closed {
            font-size: 15px !important; 
        }

    `;

    // 检查是否已经存在一个具有相同内容的 <style> 标签
    var existingStyle = Array.from(document.head.querySelectorAll('style')).find(style => style.textContent === css);

    if (existingStyle) {
        // 如果存在，则更新其内容
        existingStyle.textContent = css;
    } else {
        // 如果不存在，则创建一个新的 <style> 标签
        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }
}, 3000);

// 处理代码块里的行高
function adjustCodeBlockLineHeight() {
    // 获取所有目标元素
    const viewLinesElements = document.querySelectorAll('.view-lines.monaco-mouse-cursor-text');

    // 定义初始 top 值
    let topValue = 6;

    // 遍历所有目标元素，从第二个开始
    for (let i = 1; i < viewLinesElements.length; i++) {
        const viewLines = viewLinesElements[i];
        const childDivs = viewLines.querySelectorAll('div');

        // 重置 top 值
        topValue = 6;

        // 遍历当前元素的所有子级 div
        childDivs.forEach((div, index) => {
            // 设置 style 属性中的 top 值
            div.style.top = `${topValue}px`;

            // 更新 top 值，每次增加 16px
            topValue += 26;
        });

        // 获取第6个父元素的同级元素
        let parent = viewLines;
        for (let j = 0; j < 6; j++) {
            if (!parent) break;
            parent = parent.parentElement;
        }

        // 判断同级元素是否有markdown-code-block-header类
        const isMarkdownHeader = parent && parent.previousElementSibling &&
            parent.previousElementSibling.classList.contains('markdown-code-block-header');

        // 调用调整代码块高度的方法
        if (isMarkdownHeader) {
            // 获取viewLines的第4个上级元素
            let fourthParent = viewLines;
            for (let k = 0; k < 4; k++) {
                if (!fourthParent) break;
                fourthParent = fourthParent.parentElement;
            }

            // 修改第4个上级元素的高度
            if (fourthParent) {
                fourthParent.style.height = `${topValue + 15}px`;
            }
        } else {
            // 获取viewLines的第5个上级元素
            let fifthParent = viewLines;
            for (let k = 0; k < 5; k++) {
                if (!fifthParent) break;
                fifthParent = fifthParent.parentElement;
            }

            // 修改第5个上级元素的高度
            if (fifthParent) {
                fifthParent.style.height = `${topValue + 15}px`;
            }

            // 获取header中的span元素
            if (parent && parent.previousElementSibling) {
                const headerSpans = parent.previousElementSibling.children[0]?.children;
                if (headerSpans && headerSpans[1]) {
                    headerSpans[1].style.fontSize = '18px';
                }
            }
        }
    }
}
// 每3秒调用一次调整代码块高度的方法
setInterval(adjustCodeBlockLineHeight, 3000);