import { Component, OnChanges, Input } from '@angular/core';
import { ChannelsStatus } from '../../../shared/models/lndModels';

@Component({
  selector: 'rtl-channel-status-info',
  templateUrl: './channel-status-info.component.html',
  styleUrls: ['./channel-status-info.component.scss']
})
export class ChannelStatusInfoComponent implements OnChanges {
  @Input() channelsStatus: ChannelsStatus = {};

  constructor() {}

  ngOnChanges() {}

}
