
import customerBarCode from '../../assets/web Images/Barcode/customerQr.webp'
import partnerbarCode from '../../assets/web Images/Barcode/partnerQr.webp'

const QRCard = ({
    label,
    title,
    androidText,
    iosText,
    actionText,
    colors = {},
    className = "",
    contentWidth = ""
}) => {
    const theme = {
        background: colors.background || "#FFF1F6",
        border: colors.border || "#F2D1DF",
        accent: colors.accent || "#CC0166",
        title: colors.title || "#171717",
        description: colors.description || "#6B7280",
        qrBackground: colors.qrBackground || "#FFFFFF",
    };

    // No content = No Card
    if (!label && !title && !androidText && !iosText && !actionText) {
        return null;
    }

    const qrImage = label?.toLowerCase().includes('partner') ? partnerbarCode : customerBarCode;
    const qrAlt = label?.toLowerCase().includes('partner')
        ? 'Utshob partner app QR code for joining as a service provider'
        : 'Utshob customer app QR code for downloading the app';

    return (
       <div
    className={`flex w-full sm:w-[var(--content-width)] max-w-full items-center gap-3 rounded-xl border p-2.5 ${className}`}
    style={{
        backgroundColor: theme.background,
        borderColor: theme.border,
        "--content-width": contentWidth,
    }}
>
            {/* QR Code */}
            <div
                className="flex h-[84px] w-[84px] shrink-0 items-center justify-center overflow-hidden rounded-lg border"
                style={{
                    backgroundColor: theme.qrBackground,
                    borderColor: theme.border,
                }}
            >
                <img
                    src={qrImage}
                    alt={qrAlt}
                    width="84"
                    height="84"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain rounded-lg"
                />
            </div>

            {/* Content */}
            <div  className="min-w-0 flex flex-col gap-y-1">
                {label && (
                    <p
                        className="text-[12px] font-medium leading-[16px]"
                        style={{ color: theme.accent }}
                    >
                        {label}
                    </p>
                )}

                {title && (
                    <h3
                        className="text-[18px] font-semibold leading-[24px]"
                        style={{ color: theme.title }}
                    >
                        {title}
                    </h3>
                )}

                {(androidText || iosText) && (
                    <div className="space-y-0.5">
                        {androidText && (
                            <p
                                className="text-[12px] leading-[18px]"
                                style={{ color: theme.description }}
                            >
                                {androidText}
                            </p>
                        )}

                        {iosText && (
                            <p
                                className="text-[11px] leading-tight"
                                style={{ color: theme.description }}
                            >
                                {iosText}
                            </p>
                        )}
                    </div>
                )}

                {actionText && (
                    <p
                        className="mt-1 text-[10px] leading-tight"
                        style={{ color: theme.description }}
                    >
                        {actionText}
                    </p>
                )}
            </div>
        </div>
    );
};

export default QRCard;
