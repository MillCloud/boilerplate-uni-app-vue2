/**
 * @desc 该文件魔改自 https://ext.dcloud.net.cn/plugin?id=594
 * @desc ES6+ 语法
 * @desc JSDoc 类型
 * @desc 参考链接
 * @desc 判断 Android 和 iOS 的应用权限是否开启
 * @desc 打开应用权限设置界面
 * @desc 判断系统的位置服务是否开启
 * @link native.js https://ask.dcloud.net.cn/article/88, https://ask.dcloud.net.cn/article/114
 * @link native.js fro Android http://www.html5plus.org/doc/zh_cn/android.html
 * @link native.js for iOS http://www.html5plus.org/doc/zh_cn/ios.html
 * @link android.permission https://developer.android.com/reference/android/Manifest.permission
 * @typedef { 'android.permission.ACCEPT_HANDOVER'
 *  | 'android.permission.ACCESS_BACKGROUND_LOCATION'
 *  | 'android.permission.ACCESS_CHECKIN_PROPERTIES'
 *  | 'android.permission.ACCESS_COARSE_LOCATION'
 *  | 'android.permission.ACCESS_FINE_LOCATION'
 *  | 'android.permission.ACCESS_LOCATION_EXTRA_COMMANDS'
 *  | 'android.permission.ACCESS_MEDIA_LOCATION'
 *  | 'android.permission.ACCESS_NETWORK_STATE'
 *  | 'android.permission.ACCESS_NOTIFICATION_POLICY'
 *  | 'android.permission.ACCESS_WIFI_STATE'
 *  | 'android.permission.ACCOUNT_MANAGER'
 *  | 'android.permission.ACTIVITY_RECOGNITION'
 *  | 'android.permission.ADD_VOICEMAIL'
 *  | 'android.permission.ANSWER_PHONE_CALLS'
 *  | 'android.permission.BATTERY_STATS'
 *  | 'android.permission.BIND_ACCESSIBILITY_SERVICE'
 *  | 'android.permission.BIND_APPWIDGET'
 *  | 'android.permission.BIND_AUTOFILL_SERVICE'
 *  | 'android.permission.BIND_CALL_REDIRECTION_SERVICE'
 *  | 'android.permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE'
 *  | 'android.permission.BIND_CARRIER_MESSAGING_SERVICE'
 *  | 'android.permission.BIND_CARRIER_SERVICES'
 *  | 'android.permission.BIND_CHOOSER_TARGET_SERVICE'
 *  | 'android.permission.BIND_CONDITION_PROVIDER_SERVICE'
 *  | 'android.permission.BIND_CONTROLS'
 *  | 'android.permission.BIND_DEVICE_ADMIN'
 *  | 'android.permission.BIND_DREAM_SERVICE'
 *  | 'android.permission.BIND_INCALL_SERVICE'
 *  | 'android.permission.BIND_INPUT_METHOD'
 *  | 'android.permission.BIND_MIDI_DEVICE_SERVICE'
 *  | 'android.permission.BIND_NFC_SERVICE'
 *  | 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE'
 *  | 'android.permission.BIND_PRINT_SERVICE'
 *  | 'android.permission.BIND_QUICK_ACCESS_WALLET_SERVICE'
 *  | 'android.permission.BIND_QUICK_SETTINGS_TILE'
 *  | 'android.permission.BIND_REMOTEVIEWS'
 *  | 'android.permission.BIND_SCREENING_SERVICE'
 *  | 'android.permission.BIND_TELECOM_CONNECTION_SERVICE'
 *  | 'android.permission.BIND_TEXT_SERVICE'
 *  | 'android.permission.BIND_TV_INPUT'
 *  | 'android.permission.BIND_VISUAL_VOICEMAIL_SERVICE'
 *  | 'android.permission.BIND_VOICE_INTERACTION'
 *  | 'android.permission.BIND_VPN_SERVICE'
 *  | 'android.permission.BIND_VR_LISTENER_SERVICE'
 *  | 'android.permission.BIND_WALLPAPER'
 *  | 'android.permission.BLUETOOTH'
 *  | 'android.permission.BLUETOOTH_ADMIN'
 *  | 'android.permission.BLUETOOTH_PRIVILEGED'
 *  | 'android.permission.BODY_SENSORS'
 *  | 'android.permission.BROADCAST_PACKAGE_REMOVED'
 *  | 'android.permission.BROADCAST_SMS'
 *  | 'android.permission.BROADCAST_STICKY'
 *  | 'android.permission.BROADCAST_WAP_PUSH'
 *  | 'android.permission.CALL_COMPANION_APP'
 *  | 'android.permission.CALL_PHONE'
 *  | 'android.permission.CALL_PRIVILEGED'
 *  | 'android.permission.CAMERA'
 *  | 'android.permission.CAPTURE_AUDIO_OUTPUT'
 *  | 'android.permission.CHANGE_COMPONENT_ENABLED_STATE'
 *  | 'android.permission.CHANGE_CONFIGURATION'
 *  | 'android.permission.CHANGE_NETWORK_STATE'
 *  | 'android.permission.CHANGE_WIFI_MULTICAST_STATE'
 *  | 'android.permission.CHANGE_WIFI_STATE'
 *  | 'android.permission.CLEAR_APP_CACHE'
 *  | 'android.permission.CONTROL_LOCATION_UPDATES'
 *  | 'android.permission.DELETE_CACHE_FILES'
 *  | 'android.permission.DELETE_PACKAGES'
 *  | 'android.permission.DIAGNOSTIC'
 *  | 'android.permission.DISABLE_KEYGUARD'
 *  | 'android.permission.DUMP'
 *  | 'android.permission.EXPAND_STATUS_BAR'
 *  | 'android.permission.FACTORY_TEST'
 *  | 'android.permission.FLASHLIGHT'
 *  | 'android.permission.FOREGROUND_SERVICE'
 *  | 'android.permission.GET_ACCOUNTS'
 *  | 'android.permission.GET_ACCOUNTS_PRIVILEGED'
 *  | 'android.permission.GET_PACKAGE_SIZE'
 *  | 'android.permission.GET_TASKS'
 *  | 'android.permission.GLOBAL_SEARCH'
 *  | 'android.permission.INSTALL_LOCATION_PROVIDER'
 *  | 'android.permission.INSTALL_PACKAGES'
 *  | 'android.permission.INSTALL_SHORTCUT'
 *  | 'android.permission.INSTANT_APP_FOREGROUND_SERVICE'
 *  | 'android.permission.INTERACT_ACROSS_PROFILES'
 *  | 'android.permission.INTERNET'
 *  | 'android.permission.KILL_BACKGROUND_PROCESSES'
 *  | 'android.permission.LOADER_USAGE_STATS'
 *  | 'android.permission.LOCATION_HARDWARE'
 *  | 'android.permission.MANAGE_DOCUMENTS'
 *  | 'android.permission.MANAGE_EXTERNAL_STORAGE'
 *  | 'android.permission.MANAGE_OWN_CALLS'
 *  | 'android.permission.MASTER_CLEAR'
 *  | 'android.permission.MEDIA_CONTENT_CONTROL'
 *  | 'android.permission.MODIFY_AUDIO_SETTINGS'
 *  | 'android.permission.MODIFY_PHONE_STATE'
 *  | 'android.permission.MOUNT_FORMAT_FILESYSTEMS'
 *  | 'android.permission.MOUNT_UNMOUNT_FILESYSTEMS'
 *  | 'android.permission.NFC'
 *  | 'android.permission.NFC_PREFERRED_PAYMENT_INFO'
 *  | 'android.permission.NFC_TRANSACTION_EVENT'
 *  | 'android.permission.PACKAGE_USAGE_STATS'
 *  | 'android.permission.PERSISTENT_ACTIVITY'
 *  | 'android.permission.PROCESS_OUTGOING_CALLS'
 *  | 'android.permission.QUERY_ALL_PACKAGES'
 *  | 'android.permission.READ_CALENDAR'
 *  | 'android.permission.READ_CALL_LOG'
 *  | 'android.permission.READ_CONTACTS'
 *  | 'android.permission.READ_EXTERNAL_STORAGE'
 *  | 'android.permission.READ_INPUT_STATE'
 *  | 'android.permission.READ_LOGS'
 *  | 'android.permission.READ_PHONE_NUMBERS'
 *  | 'android.permission.READ_PHONE_STATE'
 *  | 'android.permission.READ_PRECISE_PHONE_STATE'
 *  | 'android.permission.READ_SMS'
 *  | 'android.permission.READ_SYNC_SETTINGS'
 *  | 'android.permission.READ_SYNC_STATS'
 *  | 'android.permission.READ_VOICEMAIL'
 *  | 'android.permission.REBOOT'
 *  | 'android.permission.RECEIVE_BOOT_COMPLETED'
 *  | 'android.permission.RECEIVE_MMS'
 *  | 'android.permission.RECEIVE_SMS'
 *  | 'android.permission.RECEIVE_WAP_PUSH'
 *  | 'android.permission.RECORD_AUDIO'
 *  | 'android.permission.REORDER_TASKS'
 *  | 'android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND'
 *  | 'android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND'
 *  | 'android.permission.REQUEST_DELETE_PACKAGES'
 *  | 'android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS'
 *  | 'android.permission.REQUEST_INSTALL_PACKAGES'
 *  | 'android.permission.REQUEST_PASSWORD_COMPLEXITY'
 *  | 'android.permission.RESTART_PACKAGES'
 *  | 'android.permission.SEND_RESPOND_VIA_MESSAGE'
 *  | 'android.permission.SEND_SMS'
 *  | 'android.permission.SET_ALARM'
 *  | 'android.permission.SET_ALWAYS_FINISH'
 *  | 'android.permission.SET_ANIMATION_SCALE'
 *  | 'android.permission.SET_DEBUG_APP'
 *  | 'android.permission.SET_PREFERRED_APPLICATIONS'
 *  | 'android.permission.SET_PROCESS_LIMIT'
 *  | 'android.permission.SET_TIME'
 *  | 'android.permission.SET_TIME_ZONE'
 *  | 'android.permission.SET_WALLPAPER'
 *  | 'android.permission.SET_WALLPAPER_HINTS'
 *  | 'android.permission.SIGNAL_PERSISTENT_PROCESSES'
 *  | 'android.permission.SMS_FINANCIAL_TRANSACTIONS'
 *  | 'android.permission.START_VIEW_PERMISSION_USAGE'
 *  | 'android.permission.STATUS_BAR'
 *  | 'android.permission.SYSTEM_ALERT_WINDOW'
 *  | 'android.permission.TRANSMIT_IR'
 *  | 'android.permission.UNINSTALL_SHORTCUT'
 *  | 'android.permission.UPDATE_DEVICE_STATS'
 *  | 'android.permission.USE_BIOMETRIC'
 *  | 'android.permission.USE_FINGERPRINT'
 *  | 'android.permission.USE_FULL_SCREEN_INTENT'
 *  | 'android.permission.USE_SIP'
 *  | 'android.permission.VIBRATE'
 *  | 'android.permission.WAKE_LOCK'
 *  | 'android.permission.WRITE_APN_SETTINGS'
 *  | 'android.permission.WRITE_CALENDAR'
 *  | 'android.permission.WRITE_CALL_LOG'
 *  | 'android.permission.WRITE_CONTACTS'
 *  | 'android.permission.WRITE_EXTERNAL_STORAGE'
 *  | 'android.permission.WRITE_GSERVICES'
 *  | 'android.permission.WRITE_SECURE_SETTINGS'
 *  | 'android.permission.WRITE_SETTINGS'
 *  | 'android.permission.WRITE_SYNC_SETTINGS'
 *  | 'android.permission.WRITE_VOICEMAIL'
 * } AndroidPermission
 */

/**
 * @desc 是否为 iOS，只在 APP 内起效
 */
// eslint-disable-next-line import/no-mutable-exports
let isIOS = false;
// #ifdef APP-PLUS
isIOS = plus.os.name.toLowerCase() === 'ios';
// #endif
export { isIOS };

/**
 * @desc 判断 iOS 是否开启位置权限，判断手机是否开启定位服务需要使用 checkSystemEnableLocation
 * @link CLLocationManager https://developer.apple.com/documentation/corelocation/cllocationmanager?language=objc
 * @link authorizationStatus https://developer.apple.com/documentation/corelocation/cllocationmanager/3563952-authorizationstatus?language=objc
 * @link CLAuthorizationStatus https://developer.apple.com/documentation/corelocation/clauthorizationstatus?language=objc
 */
function judgeIOSLocationPermission() {
  const clLocationManger = plus.ios.import('CLLocationManager');
  // 0 kCLAuthorizationStatusNotDetermined
  // 1 kCLAuthorizationStatusRestricted
  // 2 kCLAuthorizationStatusDenied
  // 3 kCLAuthorizationStatusAuthorized
  // 4 kCLAuthorizationStatusAuthorizedAlways
  // 5 kCLAuthorizationStatusAuthorizedWhenInUse
  const result = clLocationManger.authorizationStatus() !== 2;
  plus.ios.deleteObject(clLocationManger);
  return result;
}

/**
 * @desc 判断 iOS 是否开启推送权限，疑似不支持 ios 10.0+
 * @link UIApplication https://developer.apple.com/documentation/uikit/uiapplication?language=objc
 * @link sharedApplication https://developer.apple.com/documentation/uikit/uiapplication/1622975-sharedapplication?language=objc
 * @link currentUserNotificationSettings https://developer.apple.com/documentation/uikit/uiapplication/1623092-currentusernotificationsettings?language=objc
 * @link UIUserNotificationSettings https://developer.apple.com/documentation/uikit/uiusernotificationsettings?language=objc
 * @link types https://developer.apple.com/documentation/uikit/uiusernotificationsettings/1615321-types?language=objc
 * @link enabledRemoteNotificationTypes https://developer.apple.com/documentation/uikit/uiapplication/1623075-enabledremotenotificationtypes?language=objc
 * @link UIRemoteNotificationType https://developer.apple.com/documentation/uikit/uiremotenotificationtype?language=objc
 */
function judgeIOSPushPermission() {
  let result = false;
  const uiApplication = plus.ios.import('UIApplication');
  const application = uiApplication.sharedApplication();
  if (application.currentUserNotificationSettings) {
    const settings = application.currentUserNotificationSettings();
    // 0 UIUserNotificationTypeNone
    // 1 UIUserNotificationTypeBadge
    // 2 UIUserNotificationTypeSound
    // 3 UIUserNotificationTypeAlert
    if (settings.plusGetAttribute('types') !== 0) {
      result = true;
    }
    plus.ios.deleteObject(settings);
  } else if (application.enabledRemoteNotificationTypes() !== 0) {
    // 0 UIRemoteNotificationTypeNone
    // 1 UIRemoteNotificationTypeBadge
    // 2 UIRemoteNotificationTypeSound
    // 3 UIRemoteNotificationTypeAlert
    // 4 UIRemoteNotificationTypeNewsstandContentAvailability
    result = true;
  }
  plus.ios.deleteObject(application);
  plus.ios.deleteObject(uiApplication);
  return result;
}

/**
 * @desc 判断 iOS 是否开启摄像头权限
 * @link AVCaptureDevice https://developer.apple.com/documentation/avfoundation/avcapturedevice?language=objc
 * @link authorizationStatusForMediaType https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624613-authorizationstatusformediatype?language=objc
 * @link AVMediaType https://developer.apple.com/documentation/avfoundation/avmediatype?language=objc
 * @link AVAuthorizationStatus https://developer.apple.com/documentation/avfoundation/avauthorizationstatus?language=objc
 */
function judgeIOSCameraPermission() {
  const avCaptureDevice = plus.ios.import('AVCaptureDevice');
  // 0 AVAuthorizationStatusNotDetermined
  // 1 AVAuthorizationStatusRestricted
  // 2 AVAuthorizationStatusDenied
  // 3 AVAuthorizationStatusAuthorized
  const result = avCaptureDevice.authorizationStatusForMediaType('vide') === 3;
  plus.ios.deleteObject(avCaptureDevice);
  return result;
}

/**
 * @desc 判断 iOS 是否开启相册权限
 * @link PHPhotoLibrary https://developer.apple.com/documentation/photokit/phphotolibrary?language=objc
 * @link authorizationStatus https://developer.apple.com/documentation/photokit/phphotolibrary/1620745-authorizationstatus?language=objc
 * @link PHAuthorizationStatus https://developer.apple.com/documentation/photokit/phauthorizationstatus?language=objc
 */
function judgeIOSPhotoLibraryPermission() {
  const phPhotoLibrary = plus.ios.import('PHPhotoLibrary');
  // 0 PHAuthorizationStatusNotDetermined
  // 1 PHAuthorizationStatusRestricted
  // 2 PHAuthorizationStatusDenied
  // 3 PHAuthorizationStatusAuthorized
  // 4 PHAuthorizationStatusLimited
  const result = phPhotoLibrary.authorizationStatus() === 3;
  plus.ios.deleteObject(phPhotoLibrary);
  return result;
}

/**
 * @desc 判断 iOS 是否开启麦克风权限
 * @link AVAudioSession https://developer.apple.com/documentation/avfoundation/avaudiosession?language=objc
 * @link sharedInstance https://developer.apple.com/documentation/avfoundation/avaudiosession/1616504-sharedinstance?language=objc
 * @link recordPermission https://developer.apple.com/documentation/avfoundation/avaudiosession/1616463-recordpermission?language=objc
 * @link AVAudioSessionRecordPermission https://developer.apple.com/documentation/avfoundation/avaudiosessionrecordpermission?language=objc
 * @link AVAudioSessionRecordPermission Enum https://docs.microsoft.com/en-us/dotnet/api/avfoundation.avaudiosessionrecordpermission?view=xamarin-ios-sdk-12
 */
function judgeIOSRecordPermission() {
  let result = false;
  const avAudioSession = plus.ios.import('AVAudioSession');
  const instance = avAudioSession.sharedInstance();
  const permissionStatus = instance.recordPermission();
  // 没有在 iOS 官方文档找到对应状态码，使用的是微软对应的状态码
  // 1684369017 Denied
  // 1735552628 Granted
  // 1970168948 Undetermined
  if (permissionStatus !== 1684369017 && permissionStatus !== 1970168948) {
    result = true;
  }
  // 文件本身没有释放对象
  // plus.ios.deleteObject(instance);
  plus.ios.deleteObject(avAudioSession);
  return result;
}

/**
 * @desc 判断 iOS 是否开启通讯录权限
 * @link CNContactStore https://developer.apple.com/documentation/contacts/cncontactstore?language=objc
 * @link authorizationStatusForEntityType https://developer.apple.com/documentation/contacts/cncontactstore/1403143-authorizationstatusforentitytype?language=objc
 * @link CNEntityType https://developer.apple.com/documentation/contacts/cnentitytype?language=objc
 * @link CNAuthorizationStatus https://developer.apple.com/documentation/contacts/cnauthorizationstatus?language=objc
 */
function judgeIOSContactPermission() {
  const cnContactStore = plus.ios.import('CNContactStore');
  // 0 CNAuthorizationStatusNotDetermined
  // 1 CNAuthorizationStatusRestricted
  // 2 CNAuthorizationStatusDenied
  // 3 CNAuthorizationStatusAuthorized
  const result = cnContactStore.authorizationStatusForEntityType(0) === 3;
  plus.ios.deleteObject(cnContactStore);
  return result;
}

/**
 * @desc 判断 iOS 是否开启日历权限
 * @link EKEventStore https://developer.apple.com/documentation/eventkit/ekeventstore?language=objc
 * @link authorizationStatusForEntityType https://developer.apple.com/documentation/eventkit/ekeventstore/1507239-authorizationstatusforentitytype?language=objc
 * @link EKEntityType https://developer.apple.com/documentation/eventkit/ekentitytype?language=objc
 * @link EKAuthorizationStatus https://developer.apple.com/documentation/eventkit/ekauthorizationstatus?language=objc
 */
function judgeIOSCalendarPermission() {
  const ekEventStore = plus.ios.import('EKEventStore');
  // 0 EKAuthorizationStatusNotDetermined
  // 1 EKAuthorizationStatusRestricted
  // 2 EKAuthorizationStatusDenied
  // 3 EKAuthorizationStatusAuthorized
  const result = ekEventStore.authorizationStatusForEntityType(0) === 3;
  plus.ios.deleteObject(ekEventStore);
  return result;
}

/**
 * @desc 判断 iOS 是否开启备忘录权限
 * @link EKEventStore https://developer.apple.com/documentation/eventkit/ekeventstore?language=objc
 * @link authorizationStatusForEntityType https://developer.apple.com/documentation/eventkit/ekeventstore/1507239-authorizationstatusforentitytype?language=objc
 * @link EKEntityType https://developer.apple.com/documentation/eventkit/ekentitytype?language=objc
 * @link EKAuthorizationStatus https://developer.apple.com/documentation/eventkit/ekauthorizationstatus?language=objc
 */
function judgeIOSMemoPermission() {
  const ekEventStore = plus.ios.import('EKEventStore');
  // 0 EKAuthorizationStatusNotDetermined
  // 1 EKAuthorizationStatusRestricted
  // 2 EKAuthorizationStatusDenied
  // 3 EKAuthorizationStatusAuthorized
  const result = ekEventStore.authorizationStatusForEntityType(1) === 3;
  plus.ios.deleteObject(ekEventStore);
  return result;
}

/**
 * @desc 判断 iOS 是否开启权限
 * @param {'location' | 'push' | 'camera' | 'photoLibrary' | 'record' | 'contact' | 'calendar' | 'memo'} permission
 */
export function judgeIOSPermission(permission) {
  switch (permission) {
    case 'location':
      return judgeIOSLocationPermission();
    case 'push':
      return judgeIOSPushPermission();
    case 'camera':
      return judgeIOSCameraPermission();
    case 'photoLibrary':
      return judgeIOSPhotoLibraryPermission();
    case 'record':
      return judgeIOSRecordPermission();
    case 'contact':
      return judgeIOSContactPermission();
    case 'calendar':
      return judgeIOSCalendarPermission();
    case 'memo':
      return judgeIOSMemoPermission();
    default:
      return false;
  }
}

/**
 * @desc 判断 Android 是否开启权限
 * @param {AndroidPermission} permission
 * @return {Promise<0 | -1 | 1 | {code: string; message: string}>}
 */
export function requestAndroidPermission(permission) {
  return new Promise((resolve) => {
    plus.android.requestPermissions(
      [permission],
      (objectResult) => {
        let result = 0;
        if (objectResult.granted.length > 0) {
          result = 1;
        }
        if (objectResult.deniedPresent.length > 0) {
          result = 0;
        }
        if (objectResult.deniedAlways.length > 0) {
          result = -1;
        }
        resolve(result);
      },
      (error) => {
        resolve({
          code: error.code,
          message: error.message,
        });
      },
    );
  });
}

/**
 * @desc 打开应用权限页面，引导用户授权
 * @link UIApplication https://developer.apple.com/documentation/uikit/uiapplication?language=objc
 * @link sharedApplication https://developer.apple.com/documentation/uikit/uiapplication/1622975-sharedapplication?language=objc
 * @link NSURL https://developer.apple.com/documentation/foundation/nsurl
 * @link URLWithString https://developer.apple.com/documentation/foundation/nsurl/1572047-urlwithstring?language=objc, https://developer.apple.com/documentation/foundation/nsurl/1572049-urlwithstring?language=objc
 * @link Intent https://developer.android.com/reference/android/content/Intent
 * @link Settings https://developer.android.com/reference/android/provider/Settings
 * @link Uri https://developer.android.com/reference/android/net/Uri
 */
export function gotoAppPermissionSetting() {
  if (isIOS) {
    const uiApplication = plus.ios.import('UIApplication');
    const application = uiApplication.sharedApplication();
    const nsUrl = plus.ios.import('NSURL');
    const setting = nsUrl.URLWithString('app-settings:');
    application.openURL(setting);
    plus.ios.deleteObject(setting);
    plus.ios.deleteObject(nsUrl);
    plus.ios.deleteObject(application);
  } else {
    const Intent = plus.android.importClass('android.content.Intent');
    const Settings = plus.android.importClass('android.provider.Settings');
    const Uri = plus.android.importClass('android.net.Uri');
    const mainActivity = plus.android.runtimeMainActivity();
    const intent = new Intent();
    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
    const uri = Uri.fromParts('package', mainActivity.getPackageName(), null);
    intent.setData(uri);
    mainActivity.startActivity(intent);
  }
}

/**
 * @desc 判断手机是否开启定位服务
 * @link CLLocationManager https://developer.apple.com/documentation/corelocation/cllocationmanager?language=objc
 * @link locationServicesEnabled https://developer.apple.com/documentation/corelocation/cllocationmanager/1423648-locationservicesenabled?language=objc
 * @link Context https://developer.android.com/reference/android/content/Context
 * @link LocationManager https://developer.android.com/reference/android/location/LocationManager
 */
export function checkSystemEnableLocation() {
  let result = false;
  if (isIOS) {
    const clLocationManger = plus.ios.import('CLLocationManager');
    result = clLocationManger.locationServicesEnabled();
    plus.ios.deleteObject(clLocationManger);
    return result;
  }
  const Context = plus.android.importClass('android.content.Context');
  const LocationManager = plus.android.importClass(
    'android.location.LocationManager',
  );
  const mainActivity = plus.android.runtimeMainActivity();
  const locationService = mainActivity.getSystemService(
    Context.LOCATION_SERVICE,
  );
  result = locationService.isProviderEnabled(LocationManager.GPS_PROVIDER);
  return result;
}

export default {
  isIOS,
  judgeIOSPermission,
  requestAndroidPermission,
  gotoAppPermissionSetting,
  checkSystemEnableLocation,
};
