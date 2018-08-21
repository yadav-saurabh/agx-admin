import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styles: ['.ex-md-icons i{font-size: 40px;} .ex-fa-icons i{font-size: 35px;}']
})
export class IconsComponent {

  materialIcons = ['3d_rotation', 'accessibility', 'accessibility_new', 'accessible', 'keyboard_backspace', 'power',
    'accessible_forward', 'account_balance', 'account_balance_wallet', 'account_box', 'keyboard_arrow_right', 'cake',
    'account_circle', 'add_shopping_cart', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'videogame_asset', 'people',
    'all_out', 'android', 'announcement', 'done', 'done_all', 'done_outline', 'folder', 'computer', 'smartphone', 'mood',
    'donut_large', 'fingerprint', 'grade', 'group_work', 'help_outline', 'info', 'language', 'watch', 'tv', 'details',
    'launch', 'line_style', 'maximize', 'minimize', 'motorcycle', 'note_add', 'open_in_new', 'camera', 'dehaze', 'close',
    'payment', 'room', 'pets', 'search', 'reorder', 'settings', 'shop', 'star', 'subject', 'stores', 'crop_original', 'wc',
    'toc', 'today', 'toll', 'update', 'zoom_in', 'zoom_out', 'work', 'work_off', 'work_outline', 'control_point', 'menu',
    'error', 'warning', 'airplay', 'album', 'av_timer', 'equalizer', 'hd', 'games', 'mic', 'mic_none', 'crop', 'filter',
    'pause', 'note', 'play_arrow', 'videocam', 'videocam_off', 'volume_up', 'volume_mute', 'music_note', 'slideshow',
    'call', 'call_end', 'chat', 'forum', 'email', 'add', 'clear', 'create', 'block', 'ballot', 'drafts', 'navigate_before',
    'forward', 'reply', 'cloud', 'send', 'undo', 'bluetooth', 'style', 'timer', 'hotel', 'flight', 'layers', 'map', 'check'
  ];

  fontAwesome = ['address-book', 'address-card', 'adjust', 'anchor', 'archive', 'area-chart', 'arrows', 'arrows-h', 'arrows-v',
    'asterisk', 'at', 'automobile', 'balance-scale', 'ban', 'bar-chart', 'bath', 'battery-0', 'battery-1', 'battery-2', 'battery-3',
    'beer', 'bell', 'bicycle', 'binoculars', 'blind', 'bolt', 'bomb', 'book', 'bookmark', 'braille', 'bug', 'bus', 'cab', 'camera',
    'child', 'cloud', 'code', 'coffee', 'cog', 'cogs', 'credit-card', 'cube', 'cutlery', 'desktop', 'edit', 'envelope', 'eraser',
    'external-link', 'fighter-jet', 'file-photo-o', 'filter', 'fire', 'flash', 'flask', 'folder', 'gamepad', 'group', 'heart',
    'handshake-o', 'hourglass', 'i-cursor', 'industry', 'info', 'key', 'location-arrow', 'magic', 'male', 'map', 'map-signs',
    'motorcycle', 'paint-brush', 'paper-plane', 'percent', 'phone', 'power-off', 'refresh', 'reply', 'server', 'sign-in', 'sign-out',
    'sliders', 'snowflake-o', 'soccer-ball-o', 'sort', 'sort-asc', 'spinner', 'spoon', 'star-half-empty', 'sticky-note', 'street-view',
    'suitcase', 'sun-o', 'tachometer', 'tag', 'tags', 'television', 'terminal', 'thermometer', 'thumb-tack', 'thumbs-down', 'thumbs-o-up',
    'ticket', 'times', 'times-circle', 'tint', 'toggle-off', 'toggle-on', 'tree', 'umbrella', 'university', 'unlock', 'user', 'user-secret',
    'vcard', 'video-camera', 'volume-control-phone', 'volume-down', 'volume-off', 'volume-up', 'warning', 'wheelchair', 'window-close-o',
    'wifi', 'wrench', 'btc', 'money', 'ils', 'eur', 'inr', 'usd'
  ];

}
