import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle, Info, RefreshCw } from 'lucide-react';
import { ReservationData } from '../types';

export const ReservationSection: React.FC = () => {
  // Pre-fill tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    people: 2,
    date: defaultDateStr,
    time: '20:00',
    phone: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Determine available times based on selected date
  const getTimesForDate = (dateStr: string) => {
    if (!dateStr) return ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];
    const parts = dateStr.split('-');
    const dateObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    const day = dateObj.getDay(); // 0 is Sunday, 1 is Monday

    if (day === 0) {
      // Sunday Lunch
      return ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'];
    }
    if (day === 5 || day === 6) {
      // Friday & Saturday Night
      return ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'];
    }
    if (day === 1) {
      // Monday Closed
      return [];
    }
    // Tuesday - Thursday Night
    return ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
  };

  const availableTimes = getTimesForDate(formData.date);
  const isMonday = () => {
    if (!formData.date) return false;
    const parts = formData.date.split('-');
    const dateObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    return dateObj.getDay() === 1;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isMonday()) return;

    setSubmitting(true);
    setTimeout(() => {
      const code = 'OG-' + Math.floor(1000 + Math.random() * 9000);
      setReservationCode(code);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      people: 2,
      date: defaultDateStr,
      time: '20:00',
      phone: '',
      notes: '',
    });
  };

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    const dateObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    return dateObj.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section
      id="reservas"
      className="py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 border-t border-[#c58253]/15"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.28em] text-[#c58253] font-semibold flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-[#c58253]" />
            Experiência à Mesa
            <span className="w-6 h-[1px] bg-[#c58253]" />
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#12231c] dark:text-[#f7f5f0] font-light tracking-wide">
            Reserve seu Momento
          </h2>

          <p className="text-sm sm:text-base text-[#526359] dark:text-[#a0aca1] font-light max-w-lg mx-auto">
            Dispomos de apenas 14 mesas para garantir atendimento intimista e ritmo impecável de serviço.
          </p>
        </div>

        {/* Card or Confirmation */}
        <div className="bg-[#f0ebe0] dark:bg-[#12231c] border border-[#c58253]/30 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl relative">
          {submitted ? (
            /* Visual Confirmation Screen */
            <div className="text-center py-6 sm:py-8 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#c58253]/20 border border-[#c58253] text-[#c58253] flex items-center justify-center mx-auto">
                <CheckCircle size={32} />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c58253] font-semibold">
                  Solicitação Recebida com Sucesso
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-[#12231c] dark:text-[#f7f5f0] font-light">
                  Aguardamos você, {formData.name}
                </h3>
                <p className="text-sm text-[#5a6a60] dark:text-[#a0aca1] max-w-md mx-auto font-light">
                  Enviamos os detalhes preliminares para o seu telefone. Nossa equipe fará a confirmação definitiva em até 24h.
                </p>
              </div>

              {/* Reservation Receipt Summary */}
              <div className="bg-[#eae4d5]/70 dark:bg-[#0d1713] border border-[#c58253]/25 rounded-xl p-5 max-w-md mx-auto text-left space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-[#c58253]/20">
                  <span className="text-[#6d7e73] dark:text-[#88968c]">Código da Reserva:</span>
                  <span className="font-mono font-semibold text-[#c58253] tracking-wider text-base">
                    #{reservationCode}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#6d7e73] dark:text-[#88968c]">Data:</span>
                  <span className="font-medium text-[#12231c] dark:text-[#f7f5f0] capitalize">
                    {formatDateDisplay(formData.date)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#6d7e73] dark:text-[#88968c]">Horário:</span>
                  <span className="font-medium text-[#12231c] dark:text-[#f7f5f0]">
                    {formData.time} (tolerância de 15 min)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#6d7e73] dark:text-[#88968c]">Número de Pessoas:</span>
                  <span className="font-medium text-[#12231c] dark:text-[#f7f5f0]">
                    {formData.people} {formData.people === 1 ? 'pessoa' : 'pessoas'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#6d7e73] dark:text-[#88968c]">Telefone:</span>
                  <span className="font-medium text-[#12231c] dark:text-[#f7f5f0]">
                    {formData.phone}
                  </span>
                </div>

                {formData.notes && (
                  <div className="pt-2 border-t border-[#c58253]/15">
                    <span className="text-[#6d7e73] dark:text-[#88968c] block mb-1">Observações:</span>
                    <p className="text-xs text-[#12231c] dark:text-[#f7f5f0] italic bg-[#f7f5f0] dark:bg-[#15231c] p-2 rounded">
                      {formData.notes}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs uppercase tracking-[0.16em] font-medium text-[#12231c] dark:text-[#f7f5f0] border border-[#c58253]/40 hover:border-[#c58253] rounded transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw size={14} />
                  <span>Fazer outra reserva</span>
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nome */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-[0.16em] text-[#3d4f45] dark:text-[#c4cec7] font-medium"
                  >
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#728379] dark:text-[#88968c]"
                    />
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ex: Ana Clara Silveira"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#f7f5f0] dark:bg-[#0d1713] border border-[#c58253]/30 rounded-lg text-sm text-[#12231c] dark:text-[#f7f5f0] placeholder-[#728379] focus:outline-none focus:border-[#c58253] focus:ring-1 focus:ring-[#c58253] transition-colors"
                    />
                  </div>
                </div>

                {/* Telefone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-[0.16em] text-[#3d4f45] dark:text-[#c4cec7] font-medium"
                  >
                    Telefone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#728379] dark:text-[#88968c]"
                    />
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="Ex: (11) 98765-4321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#f7f5f0] dark:bg-[#0d1713] border border-[#c58253]/30 rounded-lg text-sm text-[#12231c] dark:text-[#f7f5f0] placeholder-[#728379] focus:outline-none focus:border-[#c58253] focus:ring-1 focus:ring-[#c58253] transition-colors"
                    />
                  </div>
                </div>

                {/* Número de Pessoas */}
                <div className="space-y-2">
                  <label
                    htmlFor="people"
                    className="block text-xs uppercase tracking-[0.16em] text-[#3d4f45] dark:text-[#c4cec7] font-medium"
                  >
                    Número de Pessoas *
                  </label>
                  <div className="relative">
                    <Users
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#728379] dark:text-[#88968c]"
                    />
                    <select
                      id="people"
                      value={formData.people}
                      onChange={(e) =>
                        setFormData({ ...formData, people: parseInt(e.target.value, 10) })
                      }
                      className="w-full pl-10 pr-4 py-3 bg-[#f7f5f0] dark:bg-[#0d1713] border border-[#c58253]/30 rounded-lg text-sm text-[#12231c] dark:text-[#f7f5f0] focus:outline-none focus:border-[#c58253] focus:ring-1 focus:ring-[#c58253] transition-colors cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'pessoa' : 'pessoas'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Data */}
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="block text-xs uppercase tracking-[0.16em] text-[#3d4f45] dark:text-[#c4cec7] font-medium"
                  >
                    Data da Reserva *
                  </label>
                  <div className="relative">
                    <Calendar
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#728379] dark:text-[#88968c]"
                    />
                    <input
                      id="date"
                      type="date"
                      required
                      min={defaultDateStr}
                      value={formData.date}
                      onChange={(e) => {
                        const newDate = e.target.value;
                        const newTimes = getTimesForDate(newDate);
                        setFormData({
                          ...formData,
                          date: newDate,
                          time: newTimes.length > 0 ? newTimes[0] : '',
                        });
                      }}
                      className="w-full pl-10 pr-4 py-3 bg-[#f7f5f0] dark:bg-[#0d1713] border border-[#c58253]/30 rounded-lg text-sm text-[#12231c] dark:text-[#f7f5f0] focus:outline-none focus:border-[#c58253] focus:ring-1 focus:ring-[#c58253] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Monday Closed Warning */}
              {isMonday() && (
                <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center gap-3 text-amber-700 dark:text-amber-300 text-xs">
                  <Info size={18} className="shrink-0" />
                  <span>
                    Às segundas-feiras nossa equipe descansa e realiza pesquisa de ingredientes. Por gentileza, selecione uma data de terça a domingo.
                  </span>
                </div>
              )}

              {/* Horário */}
              {!isMonday() && (
                <div className="space-y-2">
                  <label
                    htmlFor="time"
                    className="block text-xs uppercase tracking-[0.16em] text-[#3d4f45] dark:text-[#c4cec7] font-medium"
                  >
                    Horário Desejado *
                  </label>
                  <div className="relative">
                    <Clock
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#728379] dark:text-[#88968c]"
                    />
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#f7f5f0] dark:bg-[#0d1713] border border-[#c58253]/30 rounded-lg text-sm text-[#12231c] dark:text-[#f7f5f0] focus:outline-none focus:border-[#c58253] focus:ring-1 focus:ring-[#c58253] transition-colors cursor-pointer"
                    >
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Observações */}
              <div className="space-y-2">
                <label
                  htmlFor="notes"
                  className="block text-xs uppercase tracking-[0.16em] text-[#3d4f45] dark:text-[#c4cec7] font-medium"
                >
                  Observações (Ocasião especial, alergias ou restrições alimentares)
                </label>
                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="absolute left-3.5 top-3.5 text-[#728379] dark:text-[#88968c]"
                  />
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Ex: Aniversário de casamento; preferência por mesa tranquila; um dos convidados é celíaco."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-[#f7f5f0] dark:bg-[#0d1713] border border-[#c58253]/30 rounded-lg text-sm text-[#12231c] dark:text-[#f7f5f0] placeholder-[#728379] focus:outline-none focus:border-[#c58253] focus:ring-1 focus:ring-[#c58253] transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting || isMonday()}
                  className="w-full py-4 px-6 text-xs uppercase tracking-[0.2em] font-semibold text-white bg-[#1a2d24] dark:bg-[#c58253] hover:bg-[#c58253] dark:hover:bg-[#d69766] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span>Processando confirmação...</span>
                  ) : (
                    <span>Solicitar reserva</span>
                  )}
                </button>
              </div>

              {/* Small notice */}
              <p className="text-[11px] text-center text-[#728379] dark:text-[#88968c] leading-relaxed">
                Reservas sujeitas a disponibilidade de assentos. Cancelamentos gratuitos podem ser realizados com até 6 horas de antecedência.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
