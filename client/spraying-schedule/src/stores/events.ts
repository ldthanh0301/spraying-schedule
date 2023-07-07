import { defineStore } from "pinia";
import { urlServer } from "./constant";
import axios from "axios";

export enum E_View {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
}

export type Appointment = {
  spraying_id: string;
  spraying_name: string;
  spraying_date: string; //DateIsoString
  spraying_keywords: string;
  spraying_comment?: string;
  createdAt?: string; //DateIsoString
  updatedAt?: string; //DateIsoString
};

export type T_View = "day" | "week" | "month";

export type T_Action = {
  icon?: boolean;
  text?: string;
};

export type Configs = {
  viewEvent?: T_Action;
  reportEvent?: T_Action;
  searchPlaceholder?: string;
  eventName?: string;
  closeText?: string;
  nativeDatepicker?: boolean;
};

interface State {
  calendarEvents: Appointment[];
  configs: Configs;
}

export const useEventsStore = defineStore({
  id: "CalendarEvents",

  state: (): State => ({
    calendarEvents: [],
    configs: {
      viewEvent: {
        icon: true,
        text: "",
      },
      reportEvent: {
        icon: true,
        text: "",
      },
      searchPlaceholder: "",
      eventName: "",
      closeText: "",
      nativeDatepicker: true,
    },
  }),

  getters: {
    getEvents: (state) => state.calendarEvents,
    getConfigs: (state): Configs => state.configs,
  },

  actions: {
    setEvents(payload: Appointment[]): void {
      console.log("che2 : ",this.calendarEvents);
      this.calendarEvents = payload;
    },
    setEvent(payload: Appointment): void {
      this.calendarEvents = [...this.calendarEvents, payload];
    },
    setConfigs(payload: Configs): void {
      this.configs = Object.assign(this.configs, payload);
    },
    async fetchEvents() {
      try {
        await axios
          .get(urlServer + "/spraying-schedule/")
          .then((res) => {
           
           this.calendarEvents= res.data
          })
          .catch((err) => {
            console.log("err: ", err.response.data);
          });
      } catch (error) {
        return error;
      }
    },
  },
});
