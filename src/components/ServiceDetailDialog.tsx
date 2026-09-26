import React from 'react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data';
import { Phone, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ServiceDetailDialogProps {
  service: ServiceItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ServiceDetailDialog: React.FC<ServiceDetailDialogProps> = ({
  service,
  open,
  onOpenChange,
}) => {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto p-0 rounded-2xl bg-white border border-slate-200/90 shadow-2xl">
        <div className="relative w-full overflow-hidden bg-slate-100">
          <AspectRatio ratio={16 / 9}>
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-slate-900 font-bold text-xs shadow-xs">
                {service.popularTag || 'Prémiová služba'}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="font-mono text-xs text-red-400 font-semibold uppercase tracking-wider">
                TEPOVAČ • MALÝ RAJ
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-bold">
                <Clock className="w-3.5 h-3.5 text-red-400" />
                <span>{service.durationEstimate}</span>
              </div>
            </div>
          </AspectRatio>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {service.title}
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {service.fullDesc}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              ČO VŠETKO JE SÚČASŤOU ÚKONU:
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-[#f8fafc] p-3 rounded-lg border border-slate-200/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 block font-bold mb-0.5">Osobná garancia Borisa Hadviga:</strong>
              Používame certifikovanú profesionálnu chémiu a technológie šetrné k povrchom, bezpečné pre deti aj zvieratá.
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/20 active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Zavolať: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <DialogClose asChild>
              <button
                type="button"
                className="w-full sm:w-auto px-5 py-3 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
              >
                Zavrieť
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
