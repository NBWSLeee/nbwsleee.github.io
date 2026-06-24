/**
 * 主页交互逻辑
 * - 状态小部件时间显示
 * - 页面加载动画
 */

document.addEventListener('DOMContentLoaded', function () {
    initStatusWidget();
});

/**
 * 初始化右下角状态小部件
 * 根据当前时间显示不同状态
 */
function initStatusWidget() {
    const statusEmoji = document.querySelector('.status-emoji');
    const statusText = document.querySelector('.status-text');

    if (!statusEmoji || !statusText) return;

    function updateStatus() {
        const now = new Date();
        const hours = now.getHours();

        // 计算今日剩余/已过时间比例（简单展示）
        const totalHours = 24;
        const currentProgress = hours + now.getMinutes() / 60;
        const remaining = totalHours - currentProgress;
        const remainingHours = remaining.toFixed(1);

        let emoji = '🌙';
        let statusLabel = '休息';

        if (hours >= 6 && hours < 9) {
            emoji = '🌅';
            statusLabel = '早安';
        } else if (hours >= 9 && hours < 12) {
            emoji = '☕';
            statusLabel = '上午';
        } else if (hours >= 12 && hours < 14) {
            emoji = '🍱';
            statusLabel = '午休';
        } else if (hours >= 14 && hours < 18) {
            emoji = '💻';
            statusLabel = '工作';
        } else if (hours >= 18 && hours < 20) {
            emoji = '🌆';
            statusLabel = '傍晚';
        } else if (hours >= 20 && hours < 23) {
            emoji = '🌙';
            statusLabel = '休息';
        } else {
            emoji = '😴';
            statusLabel = '睡眠';
        }

        statusEmoji.textContent = emoji;
        statusText.textContent = `${statusLabel}日 · ${remainingHours}h`;
    }

    updateStatus();
    // 每分钟更新一次
    setInterval(updateStatus, 60000);
}